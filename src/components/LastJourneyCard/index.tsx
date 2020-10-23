import React from 'react';

import Logo from '../../assets/Logo.png';

import { Container, Date, MiddleContainer, Info } from './styles';

export interface Props {
  isHome?: boolean;
  result?: string;
  type?: string;
  adversaryLogo?: string;
  date?: string;
}

const LastJourneyCard: React.FC<Props> = ({
  isHome,
  result,
  type,
  adversaryLogo,
  date
}) => {
  return (
    <>
      <Container>
        <Info>
          <span className="isHome">{isHome ? 'Casa' : 'Fora'}</span>
        </Info>
        <img src={Logo} />
        <MiddleContainer>
          <span className="type">{type}</span>
          <span className="result">{result}</span>
        </MiddleContainer>
        <img src={adversaryLogo} />
        <Date>
          <span className="date">{date}</span>
        </Date>
      </Container>
    </>
  );
};

export default LastJourneyCard;
