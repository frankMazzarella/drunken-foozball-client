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
        <h1 className={classes.header}>Grab Your Rods</h1>
      </Grid>
      <Grid item sm={10} lg={10}>
        <Typography className={classes.story}>
          The new DFL website is officially here, boys and girls! As you can see above,
          there is a new, badass logo. There is speculation that this logo was inspiried by a photo of the great Lep
          (calm yourself sam), but that is not officially recognized. The website also includes an all-new stats page,
          and many more improvements are on the way! We will keep you all updated on the progress and look forward to
          the next DFL tournament! Hopefully, there will be a worthy battle for second place!
        </Typography>
      </Grid>
    </Grid>
  );
}
