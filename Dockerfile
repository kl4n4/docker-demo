FROM node

COPY package.json package-lock.json /usr/src/app/
COPY tsconfig.json tslint.json /usr/src/app/
COPY src/ /usr/src/app/src

WORKDIR /usr/src/app

RUN npm install
RUN npm run-script build

CMD ["npm", "start"]
