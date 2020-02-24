import React from 'react';

import FeaturePrice from './FeaturePrice';
import News from './News';
import PriceHistory from './PriceHistory';
import { RootContainer } from './styles/Container';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
  return (
    <RootContainer>
      <GlobalStyles />
      <h1>Bitcoin Cash News</h1>
      <News />
      <FeaturePrice />
      <PriceHistory />
    </RootContainer>
  );
};

export default App;
