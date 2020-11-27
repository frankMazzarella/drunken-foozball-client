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
        <h1 className={classes.header} align="center">Birds Aren't Real, But the Turkey Bowl Is</h1>
      </Grid>
      <Grid item sm={10} lg={10}>
        <Typography className={classes.story}>
          It was a gorgeous Thanksgiving Day, and the DFL playoffs began with a bang!  The tournament began with a surprise, as Rock of Gibraltar entered the ring with just one member!  Woodsy wouldn't go quietly though, as he beat the still winless Size Matters team before losing two in a row.  However, his efforts in goal placed him at 3rd on the goalkeepers list, ahead of his teammate.<br></br> Meanwhile, Free Will donned their new uniforms, but it wasn't enough to knock S.A.M. into the loser's bracket.  They met again in the finals, though, and continued their streak of three straight tournaments with at least one win against their archrivals.  It wasn't enough, though, and in the end S.A.M. claimed another playoff victory to take this year's Turkey Bowl Championship.
        </Typography>
      </Grid>
    </Grid>
  );
}
