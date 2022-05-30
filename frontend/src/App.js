import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import * as sessionActions from './store/session'
import LoginFormPage from './components/LoginFormPage';
import SingUpFormPage from './components/SignUpFormPage'

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return isLoaded && (
    <Switch>
      <Route path="/login">
        <LoginFormPage />
      </Route>
      <Route path="/signup">
        <SingUpFormPage />
      </Route>
    </Switch>
  );
}

export default App;
