FROM node

WORKDIR .

COPY package.json .

RUN npm install 

RUN npm install --save dotenv

COPY . .

EXPOSE 80

CMD ["npm", "start"]