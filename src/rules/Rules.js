import React, { useState, useEffect } from 'react';
import { CardHeader, Card, CardContent, Grid, makeStyles } from '@material-ui/core';

import RuleChapter from './RuleChapter';
import TableOfContents from './TableOfContents';
import FirebaseService from '../services/Firebase.serivce';

const useStyles = makeStyles(() => ({
  root: {
    margin: `15px auto`
  }
}));

export default function Rules() {
  const classes = useStyles();
  const header = `Drunken Foozball League Official Rules and Interpretations ${new Date().getFullYear()}`;
  const [rules, setRules] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const rulesRef = FirebaseService.getDatabaseRef('rules');
    let isComponentMounted = true;
    rulesRef.on('value', snap => {
      if (isComponentMounted) {
        setRules(JSON.parse(atob(snap.val())));
        setIsLoading(false);
      }
    });
    return () => {
      isComponentMounted = false;
    }
  }, [])

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item sm={10} lg={8}>
        <Card raised className={classes.root}>
          <CardHeader title={header} />
        </Card>
        <Card className={classes.root}>
          <CardHeader title={isLoading ? 'Rules are loading...' : 'Table of Contents'} />
          <CardContent>
            <TableOfContents rules={rules} />
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
