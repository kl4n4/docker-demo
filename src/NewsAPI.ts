import axios from 'axios';

export interface IArticle {
  author: string;
  title: string;
  description: string;
  publishedAt: Date;
  url: string;
  urlToImage: string;
  content: string;
}

export function getArticles(apiKey: string, count = 10) {
  const url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=${count}&apiKey=${apiKey}`;

  return axios.get(url)
      .then((r) => (r.data ? r.data.articles || [] : []) as IArticle[])
      .catch((err) => {
        console.warn('fetching articles failed', err);
        return [] as IArticle[];
      });
}
