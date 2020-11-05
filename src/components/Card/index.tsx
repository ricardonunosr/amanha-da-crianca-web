import React, { useState, useContext } from 'react';

import Modal from '@material-ui/core/Modal';

import { firestore } from '../../utils/firebase';
import NotificationContext from '../../contexts/NotificationContext';

import {
  Container,
  MiddleContainer,
  EditIcon,
  ModalContent,
  TrashIcon,
  Form,
  HomeTeamLogo,
  AwayTeamLogo
} from './styles';
import Button from '../../styles/elements/Button';
import Input from '../../styles/elements/Input';

export interface Props {
  homeTeamLogo: string;
  result: string;
  type: string;
  awayTeamLogo: string;
  date: string;
  canEdit?: boolean;
  id: string;
  className?: string;
}

const Card: React.FC<Props> = props => {
  const [open, setOpen] = useState(false);
  const [newResult, setNewResult] = useState('');
  const { showNotification } = useContext(NotificationContext);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteGame = async (id: string) => {
    const nextMatchesReference = await firestore.collection('nextMatches');
    await nextMatchesReference.doc(id).delete();
    showNotification('Jogo apagado');
  };

  const EditGame = async () => {
    const pastResultsReference = await firestore.collection('pastResults');
    await deleteGame(props.id);
    pastResultsReference.add({
      homeTeam: props.homeTeamLogo,
      awayTeam: props.awayTeamLogo,
      date: props.date,
      result: newResult,
      type: props.type
    });
    showNotification('Jogo atualizado');
  };

  return (
    <Container className={props.className}>
      <HomeTeamLogo src={props.homeTeamLogo} alt="Home Team Logo" />
      <MiddleContainer>
        <span className="type">{props.type}</span>
        <span className="result">{props.result}</span>
        <span className="date">{props.date?.substring(0, 10)}</span>
      </MiddleContainer>
      <AwayTeamLogo src={props.awayTeamLogo} alt="Away Team Logo" />
      {props.canEdit ? <EditIcon onClick={handleOpen} /> : ''}
      <Modal open={open} onClose={handleClose}>
        <ModalContent>
          <Form>
            <h1>Resultado</h1>
            <Input
              value={newResult}
              onChange={e => {
                e.preventDefault();
                setNewResult(e.target.value);
              }}
            />
            <Button onClick={EditGame}>Submit</Button>
          </Form>
          <TrashIcon
            onClick={() => {
              deleteGame(props.id);
            }}
          />
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Card;
