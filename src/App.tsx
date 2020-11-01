import React from 'react';
import MainPage from './pages/MainPage';
import AdminPage from './pages/AdminPage';
import Header from './components/Header';
import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/admin">
          <AdminPage />
        </Route>
      </Switch>
      <GlobalStyles />
    </Router>
  );
}

export default App;
