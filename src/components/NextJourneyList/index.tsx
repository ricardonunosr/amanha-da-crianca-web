import React from 'react';

import { Container, Header, Box, StyledCard } from './styles';
import { NextMatch } from '../../interfaces';
import { CapitalFirstLetter } from '../../utils/utils';

interface Props {
  nextMatches: NextMatch[] | undefined;
  canEdit?: boolean;
  heading: string;
}

const NextJourneyList: React.FC<Props> = ({
  nextMatches,
  canEdit,
  heading
}) => {
  return (
    <Container>
      <Header>
        <Box />
        {heading}
      </Header>
      {nextMatches?.length !== 0 ? (
        nextMatches?.map((_, i) => {
          return (
            <StyledCard
              key={nextMatches[i].id}
              canEdit={canEdit}
              id={nextMatches[i].id}
              type={CapitalFirstLetter(nextMatches[i].type)}
              result={nextMatches[i].fieldName}
              awayTeamLogo={nextMatches[i].awayTeam}
              homeTeamLogo={nextMatches[i].homeTeam}
              date={nextMatches[i].date}
            />
          );
        })
      ) : (
        <p>Sem jogos</p>
      )}
    </Container>
  );
};

export default NextJourneyList;
