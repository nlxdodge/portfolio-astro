FROM node:24-slim AS builder
RUN corepack enable
WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm fetch
RUN pnpm install --offline --frozen-lockfile
COPY public ./public
COPY src ./src
COPY astro.config.ts ./
RUN pnpm run build

FROM nginx:1.30-alpine-slim
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
