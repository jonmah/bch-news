import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { ButtonGroup } from '../components';
import { Container } from '../styles/Container';
import { populate } from './actions';

const PriceHistory = () => {
  const dispatch = useDispatch();
  const [timeline, setTimeline] = useState(30);

  useEffect(() => dispatch(populate()), [dispatch]);

  const history = useSelector((s) => s.priceHistory)
    .slice(0, timeline)
    .reverse();

  return (
    <Container>
      <h3>Price History</h3>
      <ResponsiveContainer width={'100%'} aspect={2}>
        <LineChart
          width={'100%'}
          height={250}
          data={history}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Line type='monotone' dataKey='value' stroke='#8884d8' />
        </LineChart>
      </ResponsiveContainer>
      <ButtonGroup
        setOne={() => setTimeline(2)}
        setSeven={() => setTimeline(7)}
        setThirty={() => setTimeline(30)}
      />
    </Container>
  );
};
export default PriceHistory;
