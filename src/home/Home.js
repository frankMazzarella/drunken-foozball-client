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
        <h1 className={classes.header}>Screw the Corona</h1>
      </Grid>
      <Grid item sm={10} lg={10}>
        <Typography className={classes.story}>
          The DFL took a rare opportunity to host a tournament amid the coronavirus pandemic recently. Playing
          outdoors, since the virus is afraid of sunlight, the latest tournament featured the DFL's newest team,
          Size Matters. Free Will came out a strong, defeating Rock of Gibraltar 10-1 before falling in an epic
          against S.A.M. 10-9. They'd fight their way back to the championship match, though, and in a stunning
          upset, they'd win two straight against S.A.M. to claim their first title of 2020. The race to New Year's
          Eve looks a lot more interesting now.
        </Typography>
      </Grid>
    </Grid>
  );
}
