import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  background: ${props => (props.primary ? 'mediumseagreen' : 'white')};
  color: ${props => (props.primary ? 'white' : 'mediumseagreen')};

  font-size: 1em;
  cursor: pointer;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid mediumseagreen;
  border-radius: 5px;

  &:hover {
    background: ${props => (props.primary ? 'white' : 'mediumseagreen')};
    color: ${props => (props.primary ? 'mediumseagreen' : 'white')};
  }

  @media only screen and (max-width: 600px) {
    width: 95%;
  }
`;
