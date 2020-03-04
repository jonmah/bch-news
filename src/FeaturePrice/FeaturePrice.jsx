import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from '../styles/Container';
import { populate } from './actions';

const FeaturePrice = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(populate()), [dispatch]);

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
