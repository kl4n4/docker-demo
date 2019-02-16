FROM node

COPY package.json package-lock.json tsconfig.json tslint.json /usr/src/app/

WORKDIR /usr/src/app

RUN npm install

COPY src/ /usr/src/app/src

RUN npm run-script build

CMD ["npm", "start"]
