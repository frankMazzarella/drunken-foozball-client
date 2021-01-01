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
        <h1 className={classes.header}>New Year, New Champs</h1>
      </Grid>
      <Grid item sm={10} lg={10}>
        <Typography className={classes.story}>
        2020 has come to an end.  The crazy year ended fittingly, with a crazy tournament.  The 2020 New Year's Eve Open saw Free Will finally join the ranks of the elite, winning the tournament in their first ever sweep.  They made it look easy, dispatching their opponents without much of a fight.  Don't let that distract you from the fact that Fire Breathing Rubber Duckies eliminated Rock of Gibraltar!  While S.A.M. still maintains first place, Free Will is finally within striking distance.  Who knows what 2021 will hold.
        </Typography>
      </Grid>
    </Grid>
  );
}
