import styled, { css } from 'styled-components';
import Button from '../../styles/elements/Button';

interface Props {
  user: any;
}

const AuthenticatedCSS = css`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto 90%;
  grid-template-areas:
    'Header Sign'
    'LJ NJ';
  width: 70%;
  margin: auto;
  height: 90vh;
  border: 1px solid #ccc;
  border-radius: 40px;
  margin-top: 1rem;
  padding: 20px;
`;

const NonAuthenticatedCSS = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  margin: auto;
  height: 50vh;
  border: 1px solid #ccc;
  border-radius: 40px;
  margin-top: 1rem;
  padding: 20px;
`;

export const Container = styled.div<Props>`
  ${props => (props.user ? AuthenticatedCSS : NonAuthenticatedCSS)}
`;

export const SignOutButton = styled(Button)`
  width: 20%;
  grid-area: Sign;
`;
