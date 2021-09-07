# syntax=docker/dockerfile:1

FROM node:12-alpine
#RUN apk add --no-cache nodejs
RUN npm install discord.js dotenv @discordjs/opus ffmpeg-static
WORKDIR /
COPY . .
CMD ["node", "src/index.js"]
