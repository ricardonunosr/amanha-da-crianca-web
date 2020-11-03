import React from 'react';

import AddGame from '../../components/AddGame';
import NextJourneyList from '../../components/NextJourneyList';
import LogIn from '../../components/LogIn';
import { Container, SignOutButton } from './styles';
import { NextMatch } from '../../interfaces';

import { firestore, auth } from '../../utils/firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

const AdminPage: React.FC = () => {
  const [user] = useAuthState(auth);
  const nextMatchesReference = firestore.collection('nextMatches');
  const [nextMatchesData] = useCollectionData<NextMatch>(nextMatchesReference, {
    idField: 'id'
  });
  return (
    <Container user={user}>
      {user ? (
        <>
          <h1>AdminPage</h1>
          <SignOutButton
            onClick={() => {
              auth.signOut();
            }}
          >
            Sign Out
          </SignOutButton>
          <AddGame />
          <NextJourneyList canEdit={true} nextMatches={nextMatchesData} />
        </>
      ) : (
        <LogIn />
      )}
    </Container>
  );
};

export default AdminPage;
