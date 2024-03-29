FROM node:17.4.0
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 9001
CMD [ "npm", "run", "start" ]