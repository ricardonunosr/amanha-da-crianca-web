import React from 'react';

import LastJourneyList from '../LastJourneyList';
import NextJourneyList from '../NextJourneyList';

import { Container } from './styles';

const MainContent: React.FC = ({}) => {
  return (
    <Container>
      <LastJourneyList />
      <NextJourneyList />
    </Container>
  );
};

export default MainContent;
