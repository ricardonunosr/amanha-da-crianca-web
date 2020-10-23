import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  -webkit-box-shadow: 10px 10px 5px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 5px -10px rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: space-between;
  flex: 1;
  border-radius: 10px;
  padding: 30px 30px 30px 30px;
  height: 30%;
  > img {
    max-width: 30%;
    max-height: 100%;
  }
`;

export const Date = styled.div`
  display: flex;
  .date {
    align-self: flex-end;
  }
`;

export const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 20px;

  .result {
    text-align: center;
    font-size: 3rem;
    font-weight: bold;
    margin-top: auto;
    height: 60%;
  }
`;

export const Info = styled.div`
  display: flex;
  .isHome {
    align-self: flex-end;
  }
`;
