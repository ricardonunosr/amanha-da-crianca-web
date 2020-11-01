import React from 'react';

import firestore from '../../utils/firebase';
import { Container, Input, Form, SubmitButton } from './styles';
import { useFormik } from 'formik';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

const AddGame: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      date: new Date().toISOString().substring(0, 10),
      homeTeam: '',
      awayTeam: '',
      fieldName: '',
      type: ''
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      const nextResultsReference = firestore.collection('nextMatches');
      nextResultsReference.add({ ...values });
    },
    validate: values => {}
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

        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </Container>
  );
};

export default AddGame;
