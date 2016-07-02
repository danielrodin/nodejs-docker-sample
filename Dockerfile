FROM node:argon
# for testing purposes
RUN npm install -g mocha
RUN mkdir /app
WORKDIR /app
COPY package.json /app/
RUN npm install
COPY . /app
EXPOSE 5000 5858
ENTRYPOINT ["npm", "start"]