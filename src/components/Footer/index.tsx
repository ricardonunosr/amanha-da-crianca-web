import React from 'react';

import {
  Container,
  SocialLinks,
  FacebookLogo,
  EmailLogo,
  YoutubeLogo
} from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <SocialLinks>
        <FacebookLogo />
        <EmailLogo />
        <YoutubeLogo />
      </SocialLinks>
      <p>Copyright © 2020 Amanhã da criança</p>
      <p>
        Site by <a href="https://github.com/ricardonunosr">@ricardonunosr</a>
      </p>
    </Container>
  );
};

export default Footer;
