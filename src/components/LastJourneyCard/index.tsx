import React from 'react';

import Logo from '../../assets/Logo.png';

import { Container, Date, MiddleContainer, Info } from './styles';

export interface Props {
  homeTeamLogo?: string;
  result?: string;
  type?: string;
  awayTeamLogo?: string;
  date?: string;
}

const LastJourneyCard: React.FC<Props> = ({
  homeTeamLogo,
  result,
  type,
  awayTeamLogo,
  date
}) => {
  return (
    <>
      <Container>
        <img src={homeTeamLogo} />
        <MiddleContainer>
          <span className="type">{type}</span>
          <span className="result">{result}</span>
        </MiddleContainer>
        <img src={awayTeamLogo} />
        <Date>
          <span className="date">{date}</span>
        </Date>
      </Container>
    </>
  );
};

export default LastJourneyCard;
