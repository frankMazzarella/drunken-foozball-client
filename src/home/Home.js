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
        <h1 className={classes.header}>Bon Voyage, Bitches</h1>
      </Grid>
      <Grid item sm={10} lg={10}>
        <Typography className={classes.story}>
          It was an exciting day on the DFL circuit!  With the return of Lacy, the DFL was able to 
		  host the long-awaited Le Bon Voyage Tournoi.  The latest contest saw the inclusion of a 
		  temporary team in Frankenstien, made up of Woodsy and Kevin.  They gave S.A.M. a scare, 
		  but in the end only mustered one win against Size Matters.  Meanwhile, the semifinals showcased 
		  one of the top matches of the year, when S.A.M. pulled away with a 10-9 victory over Free Will.  
		  The girls quickly dispatched Frankenstein for rematch, though, and pulled out an easy victory, 
		  setting up a sudden death match versus S.A.M..  The final match didn't go as well, though, 
		  and S.A.M. took the crown on the day with a comfortable 10-6 win.  The DFL now enters playoff 
		  season, with the 2020 Turkey Bowl next on the schedule.													
        </Typography>
      </Grid>
    </Grid>
  );
}
