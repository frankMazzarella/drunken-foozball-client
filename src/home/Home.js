import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';

import logo from './logo.svg';

const useStyles = makeStyles(() => ({
  logo: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%'
  },
  header: {
    textAlign: 'center',
    fontSize: 72,
    color: '#61978e',
    fontFamily: 'Roboto',
    margin: 0
  },
  story: {
    fontSize: 20,
    fontFamily: 'Roboto'
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item sm={10} lg={8}>
        <img src={logo} alt="logo" className={classes.logo} />
        <br /><br />
      </Grid>
      <Grid item sm={10} lg={10}>
        <h1 className={classes.header}>One and Done?</h1>
      </Grid>
      <Grid item sm={10} lg={10}>
        <Typography className={classes.story}>
            The 2021 Season of the Drunken Foozball League officially got underway this weekend!  Only three teams were available to compete, but they put on a show.  Rock of Gibraltar went up 9-6 against Free Will in the opening match, signalling a quick fall from grace for the defending champions, but they clamped down and pulled out the win.  The reigning champs dispatched S.A.M. next, but the father and son duo quickly dealt with Rock of Gibraltar to return to the big stage.  In two intense games, S.A.M. were able to reclaim their throne atop the DFL circuit.  Will Free Will right the ship and go back-to-back on NYE, or will S.A.M. take their trophies back?  The long road to New Year's Eve begins!
        </Typography>
      </Grid>
    </Grid>
  );
}
