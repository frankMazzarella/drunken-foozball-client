import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';

import rules from './rules.json';
import RuleChapter from './RuleChapter';

const useStyles = makeStyles(() => ({
  root: {
    margin: `15px auto`
  }
}));

export default function Rules() {
  const classes = useStyles();
  const header = `Drunken Foozball League Official Rules and Interpretations ${new Date().getFullYear()}`;

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item sm={10}>
        <Card raised className={classes.root}>
          <CardHeader title={header} />
        </Card>
        {
          rules.map((section, index) => {
            return <RuleChapter key={index} number={index + 1} {...section} />
          })
        }
      </Grid>
    </Grid>
  );
}
