import React from 'react';

import { Button, ButtonContainer } from '../../styles/Button';

const ButtonGroup = ({ setOne, setSeven, setThirty }) => {
  return (
    <ButtonContainer>
      <Button onClick={setOne}>1 Day</Button>
      <Button onClick={setSeven}>7 Days</Button>
      <Button onClick={setThirty}>30 Days</Button>
    </ButtonContainer>
  );
};
export default ButtonGroup;
