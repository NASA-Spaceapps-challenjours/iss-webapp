FROM node:18
RUN mkdir /trackiss/
WORKDIR /trackiss/
COPY . /trackiss/
RUN npm install --force
RUN npm run build
CMD [ "npm", "run", "start" ]
