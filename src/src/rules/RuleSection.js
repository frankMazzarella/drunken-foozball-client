import React, { Component } from 'react';
import { Typography } from '@material-ui/core'
import { Element } from 'react-scroll';

export default class RuleSection extends Component {
  sectionNumber = this.props.sectionNumber

  render() {
    return (
      <Element name={this.sectionNumber}>
        <Typography variant="h6">{`${this.sectionNumber}. ${this.props.sectionTitle}`}</Typography>
        <Typography variant="body2">{this.props.description}</Typography>
        {
          this.props.subSections.map((subSection, index) => {
            const subSectionNumber = index + 1;
            return (
              <ul key={index}>
                <li>{`${this.sectionNumber}.${subSectionNumber}. ${subSection}`}</li>
              </ul>
            )
          })
        }
      </Element>
    );
  }
}
