import React from 'react';
import { Card, CardHeader, CardContent, makeStyles } from '@material-ui/core';

import RuleSection from './RuleSection';

const useStyles = makeStyles(() => ({
  root: {
    margin: `15px auto`
  }
}));

export default function RuleChapter(props) {
  const classes = useStyles();
  const { chapterNumber } = props;

  return (
    <Card className={classes.root}>
      <CardHeader title={`${chapterNumber}. ${props.chapterTitle}`} />
      <CardContent>
        {
          props.sections.map((section, index) => {
            const sectionNumber = index + 1;
            return (
              <RuleSection key={index} sectionNumber={`${chapterNumber}.${sectionNumber}`} {...section}></RuleSection>
            )
          })
        }
      </CardContent>
    </Card>
  );
}
