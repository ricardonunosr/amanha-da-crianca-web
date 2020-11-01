import React, { useState } from 'react';

import LogoImage from '../../assets/Logo.png';

import {
  Container,
  Menu,
  Button,
  Hamburger,
  CloseButton,
  Logo
} from './styles';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Container>
        <Link to="/" className="link">
          <Logo src={LogoImage} />
        </Link>

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
