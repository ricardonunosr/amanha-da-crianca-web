import React, { useState, useContext } from 'react';

import { firestore } from '../../utils/firebase';
import { Container, Form, ExpandIcon } from './styles';
import { useFormik } from 'formik';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import Card from '../Card';
import Button from '../../styles/elements/Button';
import Input from '../../styles/elements/Input';
import NotificationContext from '../../contexts/NotificationContext';

const AddGame: React.FC = () => {
  const [showPreview, setShowPreview] = useState(false);
  const { showNotification } = useContext(NotificationContext);

  const formik = useFormik({
    initialValues: {
      date: new Date().toISOString(),
      homeTeam: '',
      awayTeam: '',
      fieldName: '',
      type: ''
    },
    onSubmit: (values, actions) => {
      const nextResultsReference = firestore.collection('nextMatches');
      nextResultsReference.add({ ...values });
      showNotification('Ação teve sucesso');
      actions.resetForm();
    }
  });

  return (
    <Container>
      <Form action="" onSubmit={formik.handleSubmit}>
        <label htmlFor="date">Date</label>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date"
            value={formik.values.date}
            onChange={formik.handleChange}
            KeyboardButtonProps={{
              'aria-label': 'change date'
            }}
          />
        </MuiPickersUtilsProvider>
        <label htmlFor="homeTeam">Home Team Logo URL</label>
        <Input
          id="homeTeam"
          name="homeTeam"
          onChange={formik.handleChange}
          value={formik.values.homeTeam}
        />
        <label htmlFor="awayTeam">Away Team Logo URL</label>
        <Input
          id="awayTeam"
          name="awayTeam"
          onChange={formik.handleChange}
          value={formik.values.awayTeam}
        />
        <label htmlFor="fieldName">Field Name</label>
        <Input
          id="fieldName"
          name="fieldName"
          placeholder="Pavilhão Ali"
          onChange={formik.handleChange}
          value={formik.values.fieldName}
        />
        <label htmlFor="type">Type</label>
        <Input
          id="type"
          name="type"
          placeholder="Escolinhas"
          onChange={formik.handleChange}
          value={formik.values.type}
        />

        <Button type="submit">Submit</Button>
        <h1>
          Preview{' '}
          <ExpandIcon
            onClick={() => {
              setShowPreview(!showPreview);
            }}
          />
        </h1>
        {showPreview ? (
          <Card
            id={''}
            awayTeamLogo={formik.values.awayTeam}
            homeTeamLogo={formik.values.homeTeam}
            canEdit={false}
            date={formik.values.date}
            type={formik.values.type}
            result={formik.values.fieldName}
          />
        ) : (
          ''
        )}
      </Form>
    </Container>
  );
};

export default AddGame;
