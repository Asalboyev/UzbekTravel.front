FROM node:22-slim AS builder

WORKDIR /app

COPY package*.json ./

ENV NODE_OPTIONS="--max-old-space-size=1024"

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

# =========================

FROM node:22-slim

WORKDIR /app

ENV NODE_ENV=production

COPY package*.json ./

# Install ONLY production dependencies
RUN npm install --omit=dev --legacy-peer-deps

# Copy build artifacts only
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["npm", "start", "--port", "37162"]