import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';

import rules from './rules.json';
import RuleChapter from './RuleChapter';

export default class Rules extends Component {
  header = `Drunken Foozball League Official Rules and Interpretations ${new Date().getFullYear()}`;

  render() {
    return (
      <Grid container direction="column" alignItems="center">
        <Grid item sm={10}>
          <Card raised>
            <CardHeader title={this.header} />
          </Card>
          {
            rules.map((section, index) => {
              return <RuleChapter key={index} {...section} />
            })
          }
        </Grid>
      </Grid>
    );
  }
}
