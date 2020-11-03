import styled from 'styled-components';
import { Expand } from '@styled-icons/boxicons-regular/Expand';

export const Container = styled.div`
  border: 2px;
  width: 100%;
  margin: auto;
  display: flex;
  height: 80%;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
`;

export const ExpandIcon = styled(Expand)`
  width: 30px;
  height: 30px;
  &:hover {
    cursor: pointer;
    color: grey;
  }
`;
