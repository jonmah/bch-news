import axios from 'axios';

export const newsUrl = 'https://www.bitcoin.com/special/news.json';

export const baseUrl = 'https://index-api.bitcoin.com/api/v0/cash/';
export const historyUrl = `${baseUrl}history`;

export const getNews = async () => {
  const result = await axios.get(newsUrl);
  return result.data;
};

export const getPriceHistory = async () => {
  const result = await axios.get(historyUrl);
  return result.data;
};
