import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import RuleSection from './RuleSection';

const useStyles = makeStyles(() => ({
  root: {
    margin: `15px auto`
  }
}));

export default function RuleChapter(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title={`${props.number}. ${props.chapterTitle}`} />
      <CardContent>
        {
          props.sections.map((section, index) => {
            return <RuleSection key={index} number={`${props.number}.${index + 1}`} {...section}></RuleSection>
          })
        }
      </CardContent>
    </Card>
  );
}
