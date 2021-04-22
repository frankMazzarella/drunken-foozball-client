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
        <h1 className={classes.header}>Slow Start, Fast Finish</h1>
      </Grid>
      <Grid item sm={10} lg={10}>
        <Typography className={classes.story}>
        The 2021 Season continued with the Bunny Bowl on Easter weekend. The league christened a new site, as Rev's Garage hosted it's first tournament.  With an all new professional table and balls, Rev paired up with Kev to take down the #1 seed in the very first game!  Lep's stellar performance in goal and Bear's 35 goals led them back to the championship game, though. Along they way they shut out RoG, avenged their loss to Rev and Kev, and dispatched the Winner's Bracket Champs, Free Will, in two straight 10-6 games. The competition is fierce, but for now S.A.M. is back on a streak. Will they reclaim their New Year's Eve title?
        </Typography>
      </Grid>
    </Grid>
  );
}
