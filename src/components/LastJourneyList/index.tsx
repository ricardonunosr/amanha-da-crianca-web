import React from 'react';

import LastJourneyCard from '../LastJourneyCard';

import { Container, Header, Box } from './styles';

import { PastResult } from '../../interfaces';

interface Props {
  pastResults: PastResult[] | undefined;
}

const LastJourneyList: React.FC<Props> = ({ pastResults }) => {
  return (
    <Container>
      <Header>
        <Box />
        Última Jornada
      </Header>
      {pastResults !== undefined
        ? pastResults.map((_, i) => {
            return (
              <LastJourneyCard
                type={pastResults[i].type}
                result={pastResults[i].result}
                awayTeamLogo={pastResults[i].awayTeam}
                homeTeamLogo={pastResults[i].homeTeam}
                date={pastResults[i].date}
              />
            );
          })
        : ''}
    </Container>
  );
};

export default LastJourneyList;
