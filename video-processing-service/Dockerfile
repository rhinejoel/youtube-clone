FROM node:18 AS builder

# SET THE WORKING DIR IN THE CONTAINER TO /app
WORKDIR /app

# COPY package.json AND packagelock.json IN THE WORKING DIR
COPY package*.json ./

# INSTALL ANY NEEDED PACKAGES FROM package.json
RUN npm install

# BUNDLE APP SOURCE INSIDE DOCKER CONTAINER
COPY . .

# BUILD THE APP
RUN npm run build

# STAGE2: PRODUCTION
FROM node:18

# INSTLL ffmpeg IN THE CONTAINER
RUN apt-get update && apt-get install -y ffmpeg

# SET THE WORKING DIRECTORY
WORKDIR /app

# COPY package.json AND packagelock.json
COPY package*.json ./

# INSTALL ONLY PRODUCTION DEPENDENCIES
RUN npm install --only=production

# COPY BUILD FROM THE BUILD STAGE
COPY --from=builder /app/dist ./dist

# MAKE PORT 300 AVAILABLE OUTSIDE THE CONTAINER
EXPOSE 3000

# COMMAND TO RUN THE APP IN THE DOCKER node.js RUNTIME
CMD [ "npm", "run", "serve" ]