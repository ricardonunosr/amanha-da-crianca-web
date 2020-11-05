import React from 'react';
import MainPage from './pages/MainPage';
import AdminPage from './pages/AdminPage';
import CalendarPage from './pages/CalendarPage';
import ResultsPage from './pages/ResultsPage';
import Header from './components/Header';
import GlobalStyles from './styles/GlobalStyles';
import { NotificationProvider } from './contexts/NotificationContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NotificationProvider>
        <Header />
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/admin">
            <AdminPage />
          </Route>
          <Route exact path="/calendar">
            <CalendarPage />
          </Route>
          <Route exact path="/results">
            <ResultsPage />
          </Route>
        </Switch>
        <GlobalStyles />
      </NotificationProvider>
    </Router>
  );
}

export default App;
