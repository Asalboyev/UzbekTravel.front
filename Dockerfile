FROM node:22-slim AS builder

WORKDIR /app

COPY package*.json ./

# RAM limit oshirish
ENV NODE_OPTIONS="--max-old-space-size=1024"

RUN npm install --force --legacy-peer-deps

COPY . .

RUN npm run build

FROM node:22-slim

WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["npm", "start"]
