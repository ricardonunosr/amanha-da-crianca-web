import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;
  height: 430px;
  width: 100%;
  background-color: var(--primary);
  display: flex;
  align-items: center;
  padding: 0 10% 20px 10%;
  @media screen and (max-width: 1180px) {
    display: flex;
    flex-direction: column;
    height: auto;
    justify-content: center;
  }

  > img {
    cursor: pointer;

    width: 330px;
    height: 330px;
  }
`;

export const Caption = styled.div`
  color: white;
  margin: 50px 80px 50px 80px;
  font-size: 22px;

  @media screen and (max-width: 1180px) {
    font-size: 16px;
    margin: 0;
  }
`;
