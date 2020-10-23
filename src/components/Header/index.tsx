import React, { useState } from 'react';

import Logo from '../../assets/Logo.png';

import { Container, Menu, Button, Hamburger, CloseButton } from './styles';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showSidebar = () => {
    setOpen(!open);
  };

  return (
    <>
      <Container>
        <img src={Logo}></img>
        <Hamburger
          onClick={() => {
            setOpen(true);
          }}
        />
        <Menu open={open}>
          <CloseButton
            open={open}
            onClick={() => {
              setOpen(false);
            }}
          />
          <Button>Calendário</Button>
          <Button>Resultados</Button>
          <Button>Escalões</Button>
          <Button>Clube</Button>
        </Menu>
      </Container>
    </>
  );
};

export default Header;
