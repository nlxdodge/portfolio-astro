FROM node:current-slim AS builder
WORKDIR /app
ENV NODE_OPTIONS="--max-old-space-size=8192"
RUN npm install --global corepack@latest && corepack enable pnpm
COPY src ./src
COPY public ./public
COPY astro.config.ts ./astro.config.ts
COPY package.json ./package.json
COPY pnpm-workspace.yaml ./pnpm-workspace.yaml
RUN pnpm install && pnpm run build

FROM nginx:alpine-slim
WORKDIR /app
COPY --from=builder --chown=nginx:nginx /app/dist /usr/share/nginx/html
COPY --chown=nginx:nginx nginx.conf /etc/nginx/conf.d/default.conf
RUN apk add --no-cache wget \
    && mkdir -p /var/cache/nginx/client_temp /run \
    && chown -R nginx:nginx /var/cache/nginx /run
USER nginx
HEALTHCHECK --interval=60s --timeout=15s --start-period=15s --retries=3 \
    CMD wget -q --spider http://127.0.0.1:5000 || exit 1
EXPOSE 5000
CMD ["sh", "-c", "nginx -g 'daemon off;'"]
