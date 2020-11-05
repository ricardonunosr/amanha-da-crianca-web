import React, { useState } from 'react';

import LogoImage from '../../assets/Logo.png';

import { Container, Menu, Hamburger, CloseButton, Logo } from './styles';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Link to="/" className="link">
        <Logo src={LogoImage} />
      </Link>
      <Hamburger onClick={handleOpen} />
      <Menu open={open}>
        <CloseButton open={open} onClick={handleClose} />
        <Link to="/calendar" onClick={handleClose}>
          Calendário
        </Link>
        <Link to="/results" onClick={handleClose}>
          Resultados
        </Link>
        <Link to="/" onClick={handleClose}>
          Escalões
        </Link>
      </Menu>
    </Container>
  );
};

export default Header;
