FROM node:current-slim AS builder
WORKDIR /app
ENV NODE_OPTIONS="--max-old-space-size=8192"
RUN npm install --global corepack@latest ; corepack enable pnpm
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm run build

FROM nginx:alpine-slim
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN apk add --no-cache wget
USER nginx
HEALTHCHECK --interval=60s --timeout=15s --start-period=15s --retries=3 \
  CMD wget -q --spider http://127.0.0.1:80 || exit 1
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
