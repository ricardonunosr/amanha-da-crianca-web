import styled from 'styled-components';
import { Bars } from '@styled-icons/fa-solid/Bars';
import { Cross } from '@styled-icons/entypo/Cross';

interface Props {
  open: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: var(--primary);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .link {
    cursor: pointer;
    margin: 60px 0 0 10%;
    width: 100px;
    height: 100px;
  }
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
`;

export const Menu = styled.div<Props>`
  display: flex;
  margin: 0 100px 0 0;
  height: 100%;
  align-items: center;
  @media screen and (max-width: 1024px) {
    display: ${p => (p.open ? 'flex' : 'none')};
    flex-direction: column;
    align-items: flex-end;
    background-color: var(--primary);
    margin: 0 0 0 0;
    position: absolute;
    top: 0px;
    right: 0;
    width: 50%;
    height: 100%;
    z-index: 2;
    padding: 0 0 0 10px;
  }
`;

export const Button = styled.div`
  color: white;
  cursor: pointer;
  padding: 0 50px 0 0;
  @media screen and (max-width: 1024px) {
    margin: 0 20px 20px 0;
    font-size: 30px;
    padding: 0 0 0 0;
  }

  &:hover {
    color: var(--hover);
  }
`;

export const CloseButton = styled(Cross)<Props>`
  width: 50px;
  height: 50px;
  color: white;
  cursor: pointer;
  @media screen and (min-width: 1024px) {
    display: ${p => (p.open ? 'inline' : 'none')};
  }

  &:hover {
    color: var(--hover);
  }
`;

export const Hamburger = styled(Bars)`
  width: 41px;
  height: 41px;
  color: white;
  cursor: pointer;
  margin-right: 20px;
  @media screen and (min-width: 1024px) {
    display: none;
  }
  &:hover {
    color: var(--hover);
  }
`;
