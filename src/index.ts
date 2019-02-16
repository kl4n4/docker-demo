import * as restify from 'restify';
import { getArticles } from './NewsAPI';

const server = restify.createServer({
  name: 'docker-demo',
  version: '0.2.0',
});

server.get('/', async (req, res, next) => {
  res.send(200, {
    message: `Hello! This is updatemi/docker-demo`,
    articles: await getArticles(process.env.API_KEY3),
  });
  next();
});

server.listen(8080, () => {
  console.log('%s listening at %s', server.name, server.url);
});
