FROM node:25-alpine AS builder
WORKDIR /app
RUN npm install -g corepack --force && corepack enable && corepack prepare pnpm@latest --activate
COPY package.json pnpm-lock.yaml ./
COPY src ./src
COPY public ./public
COPY astro.config.ts ./astro.config.ts
COPY package.json ./package.json
RUN pnpm install --frozen-lockfile && pnpm run build

FROM nginx:1.27-alpine
WORKDIR /app
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN apk add --no-cache wget && \
    mkdir -p /var/cache/nginx/client_temp /run
HEALTHCHECK --interval=60s --timeout=15s --start-period=15s --retries=3 \
    CMD wget -q --spider http://127.0.0.1:5000 || exit 1
EXPOSE 5000
CMD ["nginx", "-g", "daemon off;"]
