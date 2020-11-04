import React, { useEffect } from 'react';

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

  const SignOut = () => {
    auth.signOut();
  };

  useEffect(() => {
    document.title = 'Adminstrador | Amanhã da criança';
  }, []);

  return (
    <Container user={user}>
      {user ? (
        <>
          <h1>AdminPage</h1>
          <SignOutButton onClick={SignOut}>Sign Out</SignOutButton>
          <AddGame />
          <NextJourneyList
            heading="Calendário"
            canEdit
            nextMatches={nextMatchesData}
          />
        </>
      ) : (
        <LogIn />
      )}
    </Container>
  );
};

export default AdminPage;
