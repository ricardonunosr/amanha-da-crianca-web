import React, { useState } from 'react';

import LogoImage from '../../assets/Logo.png';

import {
  Container,
  Menu,
  Hamburger,
  CloseButton,
  Logo,
  DropdownButton,
  Dropdown,
  DropdownItem
} from './styles';
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
        <DropdownButton>
          Escalões
          <Dropdown>
            <Link to="/tier/seniores" onClick={handleClose}>
              <DropdownItem>Seniores</DropdownItem>
            </Link>
            <Link to="/tier/juniores" onClick={handleClose}>
              <DropdownItem>Juniores</DropdownItem>
            </Link>
            <Link to="/tier/juvenis" onClick={handleClose}>
              <DropdownItem>Juvenis</DropdownItem>
            </Link>
            <Link to="/tier/iniciados" onClick={handleClose}>
              <DropdownItem>Iniciados</DropdownItem>
            </Link>
            <Link to="/tier/infantis" onClick={handleClose}>
              <DropdownItem>Infantis</DropdownItem>
            </Link>
            <Link to="/tier/benjamins" onClick={handleClose}>
              <DropdownItem>Benjamins</DropdownItem>
            </Link>
            <Link to="/tier/traquinas" onClick={handleClose}>
              <DropdownItem>Traquinas</DropdownItem>
            </Link>
          </Dropdown>
        </DropdownButton>
      </Menu>
    </Container>
  );
};

export default Header;
