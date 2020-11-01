import React from 'react';

import LastJourneyCard from '../LastJourneyCard';

import { Container, Header, Box } from './styles';
import { NextMatch } from '../../interfaces';

interface Props {
  nextMatches: NextMatch[] | undefined;
}

const NextJourneyList: React.FC<Props> = ({ nextMatches }) => {
  return (
    <Container>
      <Header>
        <Box />
        Próxima Jornada
      </Header>
      {nextMatches !== undefined
        ? nextMatches.map((_, i) => {
            return (
              <LastJourneyCard
                type={nextMatches[i].type}
                result={nextMatches[i].fieldName}
                awayTeamLogo={nextMatches[i].awayTeam}
                homeTeamLogo={nextMatches[i].homeTeam}
                date={nextMatches[i].date}
              />
            );
          })
        : ''}
    </Container>
  );
};

export default NextJourneyList;
