import React, { useEffect } from 'react';

import LastJourneyList from '../../components/LastJourneyList';
import NextJourneyList from '../../components/NextJourneyList';
import { firestore } from '../../utils/firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { PastResult } from '../../interfaces';
import { Container } from './styles';
import { NextMatch } from '../../interfaces';
import { CapitalFirstLetter } from '../../utils/utils';
import { useParams } from 'react-router-dom';

interface ParamsProps {
  tierId: string;
}

const TierPage: React.FC = () => {
  let { tierId } = useParams<ParamsProps>();
  const nextMatchesReference = firestore.collection('nextMatches');
  const [nextMatchesData] = useCollectionData<NextMatch>(
    nextMatchesReference.where('type', '==', tierId),
    {
      idField: 'id'
    }
  );

  const pastResultsReference = firestore.collection('pastResults');
  const [pastResultsData] = useCollectionData<PastResult>(
    pastResultsReference.orderBy('date', 'desc'),
    {
      idField: 'id'
    }
  );

  useEffect(() => {
    let tier = CapitalFirstLetter(tierId);
    document.title = `${tier} | Amanhã da criança`;
  }, []);

  return (
    <Container>
      <LastJourneyList heading="Resultados" pastResults={pastResultsData} />
      <NextJourneyList heading="Calendário" nextMatches={nextMatchesData} />
    </Container>
  );
};

export default TierPage;
