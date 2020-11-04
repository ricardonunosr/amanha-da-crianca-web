import React, { useEffect } from 'react';

import NextJourneyList from '../../components/NextJourneyList';
import { firestore } from '../../utils/firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { NextMatch } from '../../interfaces';
import { Container } from './styles';

const CalendarPage: React.FC = () => {
  const nextMatchesReference = firestore.collection('nextMatches');
  const [nextMatchesData] = useCollectionData<NextMatch>(nextMatchesReference, {
    idField: 'id'
  });

  useEffect(() => {
    document.title = 'Calendário | Amanhã da criança';
  }, []);
  return (
    <Container>
      <NextJourneyList heading="Calendário" nextMatches={nextMatchesData} />
    </Container>
  );
};

export default CalendarPage;
