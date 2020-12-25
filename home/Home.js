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
        <h1 className={classes.header}>Play It Again, S.A.M.</h1>
      </Grid>
      <Grid item sm={10} lg={10}>
        <Typography className={classes.story}>
        Christmas Eve came and went, and with it was another memorable tournament.  Rock of Gibraltar flashed back to their prime, beating Free Will in Round 1.  They followed that up with a commanding 9-5 lead against S.A.M.  For the second time in history, though, S.A.M. showed why they're #1 with 5 straight points to stay out of the losers' bracket.  Free Will and Rock of Gibraltar met again, this time in an elimination game, and the girls fed off S.A.M.'s energy to get back to the championship game.  The champs were clearly at their best, though, and swept a tournament for the first time since February, claiming this year's Christmas Eve Clash.
        </Typography>
      </Grid>
    </Grid>
  );
}
