import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import logo from './logo.png';

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <img src={logo} alt="img"></img>
        <br /><br />
        <Button variant="contained" component={Link} to="/rules">Official DFL Rules</Button>
      </React.Fragment>
    );
  }
}
