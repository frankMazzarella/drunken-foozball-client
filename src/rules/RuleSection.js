import React, { Component } from 'react';

export default class RuleSection extends Component {
  render() {
    return (
      <React.Fragment>
        <div>{this.props.sectionTitle}</div>
        <div>{this.props.description}</div>
      </React.Fragment>
    );
  }
}
