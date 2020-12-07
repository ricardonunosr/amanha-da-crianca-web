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

export const Menu = styled.nav<Props>`
  display: flex;
  margin: 0 100px 0 0;
  height: 100%;
  align-items: center;
  position: relative;

  @media screen and (max-width: 1024px) {
    display: ${p => (p.open ? 'flex' : 'none')};
    flex-direction: column;
    align-items: flex-end;
    background-color: var(--primary);
    margin: 0 0 0 0;
    position: fixed;
    top: 0px;
    right: 0;
    width: 50%;
    height: 100vh;
    z-index: 2;
  }

  //Nav Items
  > button {
    cursor: pointer;
    padding: 30px;
    height: 100%;
    position: relative;
    ul {
      width: 100%;
    }
    display: flex;
    align-items: center;
    @media screen and (max-width: 1024px) {
      font-size: 30px;
      padding: 0 10px 0 0px;
      width: 100%;
      height: 100px;
      display: flex;
      justify-content: flex-end;
    }
    &:hover {
      border-bottom: 2px solid white;
    }
  }
`;

export const Dropdown = styled.ul`
  opacity: 0;
  display: none;
  width: 10rem;
  min-width: 5rem;
  position: absolute;
  transition: all 0.5s ease;
  top: 100%;
  left: 0;
  z-index: 100;
`;
export const DropdownButton = styled.button`
  width: 100%;
  height: 100%;
  color: white;
  font-size: 1.5rem;
  background-color: transparent;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  &:hover {
    background-color: var(--hover);
  }
  &:hover > ${Dropdown} {
    opacity: 1;
    display: block;
  }
`;

export const DropdownItem = styled.li`
  color: #fff;

  background: var(--primary);
  display: block;
  float: left;
  padding: 1rem;
  position: relative;
  text-decoration: none;
  transition-duration: 0.5s;
  clear: both;
  width: 100%;
  a {
    text-decoration: none;
    color: white;
  }
  &:hover {
    background: var(--hover);
    cursor: pointer;
  }
`;

export const CloseButton = styled(Cross)<Props>`
  width: 50px;
  height: 50px;
  color: white;
  cursor: pointer;
  @media screen and (max-width: 1024px) {
    display: ${p => (p.open ? 'inline' : 'none')};
  }

  @media screen and (min-width: 1024px) {
    display: none;
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
