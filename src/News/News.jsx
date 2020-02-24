import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { compose } from 'redux';

import { Story } from '../components';
import { Container } from '../styles/Container';
import { getNews } from '../api/bitcoin';
import { populate } from './actions';

const take = n => A => A.slice(0, n);
const map = f => A => A.map(f);

const Article = ({ id }) => <Story {...useSelector(s => s.news.items[id])} />;

const renderArticle = C => id => <C {...{ id, key: id }} />;
const renderArticles = map(renderArticle(Article));

const News = () => {
  const dispatch = useDispatch();
  const ids = useSelector(s => s.news.ids);

  useEffect(() => {
    getNews().then(compose(dispatch, populate));
  }, [dispatch]);

  return (
    <Container>
      <h3>News</h3>
      {compose(renderArticles, take(4))(ids)}
    </Container>
  );
};

export default News;
