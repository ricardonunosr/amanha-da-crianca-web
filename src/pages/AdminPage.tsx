import React from 'react';
import styled from 'styled-components';
import AddGame from '../components/AddGame';
import NextJourneyList from '../components/NextJourneyList';

import { NextMatch } from '../interfaces';

import firestore from '../utils/firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const Container = styled.div`
  //AG- Add Game
  //NM- Next Matches

  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-areas: 'AG NM';
  width: 70%;
  margin: auto;
  height: 80vh;
`;

const AdminPage: React.FC = () => {
  const nextMatchesReference = firestore.collection('nextMatches');
  const [nextMatchesData] = useCollectionData<NextMatch>(
    nextMatchesReference.limit(3),
    {
      idField: 'id'
    }
  );
  return (
    <Container>
      <AddGame />
      <NextJourneyList nextMatches={nextMatchesData} />
    </Container>
  );
};

export default AdminPage;
