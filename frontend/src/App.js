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
import ProfilePage from './components/Profile';
import HostPage from './components/HostPage';
import ResortEdit from './components/HostPage/ResortEditModa';
import ResultsPage from './components/Results';
import TestPage from './components/Results/testPage';


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
          <Route path='/resort/edit/:id' exact>
            <ResortEdit />
          </Route>
          <Route path='/user' exact>
            <ProfilePage />
          </Route>
          <Route path='/user/resort' exact>
            <HostPage />
          </Route>
          <Route path='/results' exact={true}>
            <ResultsPage />
          </Route>
          <Route path='/test/page' exact={true}>
            <TestPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
