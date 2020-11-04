import React, { useEffect } from 'react';

import LastJourneyList from '../../components/LastJourneyList';
import { firestore } from '../../utils/firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { PastResult } from '../../interfaces';
import { Container } from './styles';

const ResultsPage: React.FC = () => {
  const pastResultsReference = firestore.collection('pastResults');
  const [pastResultsData] = useCollectionData<PastResult>(
    pastResultsReference,
    {
      idField: 'id'
    }
  );

  useEffect(() => {
    document.title = 'Resultados | Amanhã da criança';
  }, []);

  return (
    <Container>
      <LastJourneyList heading="Resultados" pastResults={pastResultsData} />
    </Container>
  );
};

export default ResultsPage;
