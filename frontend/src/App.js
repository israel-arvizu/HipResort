import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import * as sessionActions from './store/session'
import LoginFormPage from './components/LoginFormPage';
import SingUpFormPage from './components/SignUpFormPage'
import ReservationsPage from './components/Reservations/reservationsPage';
import ResortsPage from './components/Resorts/allResortsPage';
import ResortDetails from './components/Resorts/resortDetailsPage';
import Home from './components/Home'
import Navigation from './components/Navigation';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return isLoaded && (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path="/login" exact>
            <LoginFormPage />
          </Route>
          <Route path="/signup" exact>
            <SingUpFormPage />
          </Route>
          <Route path='/reservations' exact>
            <ReservationsPage />
          </Route>
          <Route path='/resort' exact>
            <ResortsPage />
          </Route>
          <Route path='/resort/:id' exact>
            <ResortDetails />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
