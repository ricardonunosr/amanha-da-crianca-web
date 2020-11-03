import React from 'react';

import { Container, Box, CheckCircleIcon, Text } from './styles';

interface Props {
  text: string;
}

const Notification: React.FC<Props> = ({ text }) => {
  return (
    <Container>
      <Box />
      <CheckCircleIcon />
      <Text>{text}</Text>
    </Container>
  );
};

export default Notification;
