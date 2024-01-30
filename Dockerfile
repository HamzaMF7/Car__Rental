FROM node

WORKDIR /app

COPY package*.json /app/

RUN npm install 

COPY . .

EXPOSE 3005

CMD [ "npm" , "run" , "dev" ]