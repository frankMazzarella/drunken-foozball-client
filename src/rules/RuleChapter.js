import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import RuleSection from './RuleSection';

export default class RuleChapter extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardHeader title={this.props.chapterTitle} />
          <CardContent>
            {
              this.props.sections.map((section) => {
                return <RuleSection {...section}></RuleSection>
              })
            }
          </CardContent>
        </Card>
      </div>
    );
  }
}
