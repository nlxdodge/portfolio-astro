FROM node:current-slim AS builder
WORKDIR /app
ENV NODE_OPTIONS="--max-old-space-size=8192"
RUN npm install --global corepack@latest ; corepack enable pnpm
COPY package.json pnpm-lock.yaml ./
RUN pnpm install
COPY . .
RUN pnpm run build

FROM nginx:alpine-slim
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
