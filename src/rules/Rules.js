import React from 'react';
import { CardHeader, Card, CardContent, Grid, makeStyles } from '@material-ui/core';

import rules from './rules.json';
import RuleChapter from './RuleChapter';
import TableOfContents from './TableOfContents';

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
      <Grid item sm={10} lg={8}>
        <Card raised className={classes.root}>
          <CardHeader title={header} />
        </Card>
        <Card className={classes.root}>
          <CardHeader title={'Table of Contents'} />
          <CardContent>
            <TableOfContents />
          </CardContent>
        </Card>
        {
          rules.map((chapter, index) => {
            return <RuleChapter key={index} chapterNumber={index + 1} {...chapter} />
          })
        }
      </Grid>
    </Grid>
  );
}
