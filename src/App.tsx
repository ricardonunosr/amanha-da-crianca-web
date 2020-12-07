import React from 'react';
import MainPage from './pages/MainPage';
import AdminPage from './pages/AdminPage';
import TierPage from './pages/TierPage';
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
          <Route exact path="/tier/:tierId">
            <TierPage />
          </Route>
        </Switch>
        <GlobalStyles />
      </NotificationProvider>
    </Router>
  );
}

export default App;
