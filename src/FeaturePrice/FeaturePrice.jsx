import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { compose } from 'redux';

import { Container } from '../styles/Container';
import { getFeaturePrice } from '../api/bitcoin';
import { populate } from './actions';

const FeaturePrice = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getFeaturePrice().then(compose(dispatch, populate));
  }, [dispatch]);

  const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  const featurePrice = `${currencyFormatter.format(
    useSelector(s => s.featurePrice.price)
  )} USD`;

  return (
    <Container>
      <h3>Feature Price</h3>
      {featurePrice}
    </Container>
  );
};

export default FeaturePrice;
