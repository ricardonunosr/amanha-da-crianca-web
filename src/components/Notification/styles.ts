import styled from 'styled-components';
import { CheckCircle } from '@styled-icons/boxicons-regular/CheckCircle';

export const Container = styled.div`
  background-color: var(--primary);
  width: 300px;
  height: 100px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 30%);
  animation: fadeIn 1s linear alternate;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translate(-50%, -30%);
    }
    to {
      opacity: 1;
      transform: translate(-50%, 30%);
    }
  }
`;

export const Box = styled.div`
  width: 10%;
  height: 100%;
  border-radius: 15px;
  border: 20px solid var(--hover);
`;

export const CheckCircleIcon = styled(CheckCircle)`
  color: green;
  width: 30px;
  height: 30px;
  margin: 0 20px 0 20px;
`;

export const Text = styled.div`
  color: white;
`;
