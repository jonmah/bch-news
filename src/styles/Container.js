import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  width: 75%;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
