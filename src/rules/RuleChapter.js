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
