import React from 'react';

import LastJourneyList from '../LastJourneyList';
import NextJourneyList from '../NextJourneyList';
import { PastResult, NextMatch } from '../../interfaces';
import { Container } from './styles';

import { firestore } from '../../utils/firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const MainContent: React.FC = () => {
  const pastResultsReference = firestore.collection('pastResults');
  const [pastResultsData] = useCollectionData<PastResult>(
    pastResultsReference.orderBy('date', 'desc').limit(3),
    {
      idField: 'id'
    }
  );
  const nextMatchesReference = firestore.collection('nextMatches');
  const [nextMatchesData] = useCollectionData<NextMatch>(
    nextMatchesReference.limit(3),
    {
      idField: 'id'
    }
  );

  return (
    <Container>
      <LastJourneyList pastResults={pastResultsData} />
      <NextJourneyList canEdit={false} nextMatches={nextMatchesData} />
    </Container>
  );
};

export default MainContent;
