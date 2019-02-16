# build stage
FROM node AS build

COPY package.json package-lock.json tsconfig.json tslint.json /usr/src/app/

WORKDIR /usr/src/app

RUN npm install

COPY src/ /usr/src/app/src

RUN npm run-script build


# web container
FROM node:alpine
WORKDIR /usr/src/app

COPY --from=build /usr/src/app/node_modules /usr/src/app/node_modules
COPY --from=build /usr/src/app/package.json /usr/src/app/package.json
COPY --from=build /usr/src/app/lib /usr/src/app/lib

CMD ["npm", "start"]
