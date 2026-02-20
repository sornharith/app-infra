FROM oven/bun:1-alpine AS base
WORKDIR /usr/src/app
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile
COPY . .
USER bun
EXPOSE 3000
CMD ["bun", "run", "index.ts"]