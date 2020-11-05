import React, { useState } from 'react';
import Notification from '../components/Notification';

export interface NotificationContextData {
  showNotification: (text: string) => {};
}

const NotificationContext = React.createContext<NotificationContextData>(
  {} as NotificationContextData
);

export const NotificationProvider: React.FC = ({ children }) => {
  const [show, setShow] = useState(false);
  const [text, setText] = useState('');

  const showNotification = async (t: string) => {
    if (show) setShow(false);
    setText(t);
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 5000);
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {show ? <Notification text={text} /> : ''}
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
