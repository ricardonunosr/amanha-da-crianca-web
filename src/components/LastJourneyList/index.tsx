import React from 'react';

import LastJourneyCard from '../LastJourneyCard';

import { Container, Header } from './styles';

const LastJourneyList: React.FC = ({}) => {
  return (
    <>
      <Container>
        <Header>
          <div className="Box"></div>
          Última Jornada
        </Header>
        <LastJourneyCard
          isHome={true}
          type="Escolinhas"
          result="3-1"
          adversaryLogo="https://upload.wikimedia.org/wikipedia/pt/c/c5/F.C._Porto_logo.png"
          date="2020-02-19"
        />
        <LastJourneyCard
          isHome={true}
          type="Escolinhas"
          result="3-1"
          adversaryLogo="https://upload.wikimedia.org/wikipedia/pt/c/c5/F.C._Porto_logo.png"
          date="2020-02-19"
        />
        <LastJourneyCard
          isHome={true}
          type="Escolinhas"
          result="3-1"
          adversaryLogo="https://upload.wikimedia.org/wikipedia/pt/c/c5/F.C._Porto_logo.png"
          date="2020-02-19"
        />
      </Container>
    </>
  );
};

export default LastJourneyList;