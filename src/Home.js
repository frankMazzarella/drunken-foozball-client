import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Button variant="contained" component={Link} to="/rules">Official DFL Rules</Button>
      </div>
    );
  }
}
