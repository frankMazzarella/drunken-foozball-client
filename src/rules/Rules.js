import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import rules from './rules.json';
import RuleChapter from './RuleChapter';

export default class Rules extends Component {
  header = `Drunken Foozball League Official Rules and Interpretations ${new Date().getFullYear()}`;

  render() {
    return (
      <div>
        <Card>
          <CardHeader title={this.header} />
        </Card>

        {
          rules.map((section) => {
            return <RuleChapter {...section} />
          })
        }
      </div>
    );
  }
}
