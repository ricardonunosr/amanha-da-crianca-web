import React from 'react';

import { Container, Form } from './styles';
import Button from '../../styles/elements/Button';
import Input from '../../styles/elements/Input';
import { auth } from '../../utils/firebase';
import { useFormik } from 'formik';

const LogIn: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: async values => {
      await logInWithEmailPass(values.email, values.password);
    }
  });

  const logInWithEmailPass = async (email: string, password: string) => {
    await auth.signInWithEmailAndPassword(email, password);
  };

  return (
    <Container>
      <Form action="" onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email</label>
        <Input
          id="email"
          name="email"
          placeholder="example@email.com"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <label htmlFor="password">Password</label>
        <Input
          type="password"
          id="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <Button type="submit">Log In</Button>
      </Form>
    </Container>
  );
};

export default LogIn;
