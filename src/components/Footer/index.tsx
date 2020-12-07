import React, { useContext } from 'react';
import NotificationContext from '../../contexts/NotificationContext';
import {
  Container,
  SocialLinks,
  FacebookLogo,
  EmailLogo,
  YoutubeLogo
} from './styles';

import CopyToClipboard from 'react-copy-to-clipboard';

const Footer: React.FC = () => {
  const { showNotification } = useContext(NotificationContext);

  return (
    <Container>
      <SocialLinks>
        <CopyToClipboard
          text="futsal@acrianca.pt"
          onCopy={() => {
            showNotification('Email copiado');
          }}
        >
          <EmailLogo />
        </CopyToClipboard>
        <a href="https://www.facebook.com/oamanhadacrianca">
          <FacebookLogo />
        </a>
      </SocialLinks>
      <p>Copyright © 2020 Amanhã da criança</p>
      <p>
        Site by <a href="https://github.com/ricardonunosr">@ricardonunosr</a>
      </p>
    </Container>
  );
};

export default Footer;
