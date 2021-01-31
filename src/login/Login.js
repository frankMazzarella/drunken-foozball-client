import React, { useState } from 'react';
import { Grid, TextField, Button, Card, CardHeader } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import FirebaseService from '../services/Firebase.serivce';

// TODO: fix the error message cause it looks like ass
// TODO: set up route guard to prevent unauthed users from accessing pages that dont belong to them
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();

  function handleLoginClick() {
    setErrorMessage('');
    FirebaseService.login(email, password)
      .then(() => history.push('/admin'))
      .catch((error) => {
        console.error(error);
        setErrorMessage(error.message);
      });
  }

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item sm={10} lg={8}>
        <TextField
          value={email}
          onChange={event => setEmail(event.target.value)}
          label="Email"
          variant="filled"
        /><br />
        <TextField
          value={password}
          onChange={event => setPassword(event.target.value)}
          label="Password"
          variant="filled"
          type="password"
        /><br />
        <Button variant="contained" color="primary" onClick={handleLoginClick}>Login</Button>
        {
          errorMessage !== '' ?
            <Card raised><CardHeader title={errorMessage} /></Card> :
            null
        }
      </Grid>
    </Grid>
  );
}
