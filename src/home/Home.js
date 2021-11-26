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
        <h1 className={classes.header}>Kicking off the Playoffs with a Bang</h1>
      </Grid>
      <Grid item sm={10} lg={10}>
        <Typography className={classes.story}>
        The 2021 Playoffs got their start with the Turkey Bowl, taking place in the Fumanti Dome.  It was the first ever tournament to take place at the new DFL location.  With a guest team making an appearance, the tournament started off with a win by Fire Breathing Rubber Duckies, before the usual meeting of S.A.M. and Free Will in the 2nd round.  Free Will advance to the finals first, and S.A.M. went on to easily dispatch Rock of Gibraltar to get to the rematch.  In a Finals match for the ages, Free Will took an early 8-3 lead before a strong comeback brought on a 9-9 sudden death point.  Lacy sank the game winning shot, giving Free Will their first tournament win of the year.
        </Typography>
      </Grid>
    </Grid>
  );
}
