import styled from 'styled-components';
import { Facebook } from '@styled-icons/boxicons-logos/Facebook';
import { EmailOutline } from '@styled-icons/evaicons-outline/EmailOutline';
import { Youtube } from '@styled-icons/boxicons-logos/Youtube';

export const Container = styled.div`
  height: 10 0px;
  width: 100%;
  background-color: var(--footer);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px 0 50px;

  @media screen and (max-width: 1180px) {
    display: flex;
    flex-direction: column;
    height: auto;
  }

  > p {
    color: var(--footer-text);
  }
  > p a {
    color: #0060b6;
    text-decoration: none;
  }

  > p a:hover {
    color: #00a0c6;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const SocialLinks = styled.div``;

export const FacebookLogo = styled(Facebook)`
  height: 70px;
  width: 70px;
  color: var(--footer-text);
`;
export const EmailLogo = styled(EmailOutline)`
  height: 70px;
  width: 70px;
  color: var(--footer-text);
`;
export const YoutubeLogo = styled(Youtube)`
  height: 70px;
  width: 70px;
  color: var(--footer-text);
`;
