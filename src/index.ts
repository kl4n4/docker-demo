import * as fs from 'fs';
import * as restify from 'restify';
import { getArticles } from './NewsAPI';

const server = restify.createServer({
  name: 'docker-demo',
  version: '0.5.0',
});

server.get('/', async (req, res, next) => {
  const username = req.header('X-Consumer-Username', 'unknown');
  res.send(200, {
    message: `Hello ${username}! This is updatemi/docker-demo`,
    articles: await getArticles(fs.readFileSync(process.env.API_SECRET).toString()),
  });
  next();
});

server.listen(8080, () => {
  console.log('%s listening at %s', server.name, server.url);
});
