import styled from 'styled-components';

export const Container = styled.div`
  //LJ- last journey
  //NJ- next journey

  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-areas: 'LJ NJ';
  width: 70%;
  margin: auto;
  height: 80vh;

  @media screen and (max-width: 1180px) {
    display: flex;
    flex-direction: column;
  }
`;
