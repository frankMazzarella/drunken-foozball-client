import React, { Component } from 'react';
import { Typography } from '@material-ui/core'

export default class RuleSection extends Component {
  render() {
    return (
      <React.Fragment>
        <Typography variant="h6">{`${this.props.number}. ${this.props.sectionTitle}`}</Typography>
        <Typography variant="body2">{this.props.description}</Typography>
        {
          this.props.subSections.map((subSection, index) => {
            return (
              <ul>
                <li>{`${this.props.number}.${index + 1}. ${subSection}`}</li>
              </ul>
            )
          })
        }
      </React.Fragment>
    );
  }
}
