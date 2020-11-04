import React from 'react';

import { Container, Header, Box, StyledCard } from './styles';

import { PastResult } from '../../interfaces';

interface Props {
  pastResults: PastResult[] | undefined;
  heading: string;
}

const LastJourneyList: React.FC<Props> = ({ pastResults, heading }) => {
  return (
    <Container>
      <Header>
        <Box />
        {heading}
      </Header>
      {pastResults?.length !== 0 ? (
        pastResults?.map((_, i) => {
          return (
            <StyledCard
              key={pastResults[i].id}
              canEdit={false}
              id={pastResults[i].id}
              type={pastResults[i].type}
              result={pastResults[i].result}
              awayTeamLogo={pastResults[i].awayTeam}
              homeTeamLogo={pastResults[i].homeTeam}
              date={pastResults[i].date}
            />
          );
        })
      ) : (
        <p>Sem jogos</p>
      )}
    </Container>
  );
};

export default LastJourneyList;
