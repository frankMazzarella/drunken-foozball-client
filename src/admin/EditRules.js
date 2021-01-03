import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Button } from '@material-ui/core';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/webpack-resolver";

import FirebaseService from '../services/Firebase.serivce';

export default class EditRules extends Component {
  constructor(props) {
    super(props);
    this.state = { editorValue: '' }
  }

  componentDidMount() {
    const rulesRef = FirebaseService.getDatabaseRef('rules');
    rulesRef.on('value', snap => {
      this.setState({ editorValue: atob(snap.val()) });
    });
  }

  render() {
    return (
      <Grid container direction="column" alignItems="center">
        <Grid item xs={12}>
          <Button variant="contained" component={Link} to="/admin">Go Back</Button>
          <Button variant="contained" color="primary">Save</Button>
        </Grid>
        <AceEditor
          defaultValue="Loading..."
          value={this.state.editorValue}
          mode="json"
          theme="twilight"
          width="100%"
          tabSize={2}
          showPrintMargin={false}
        />
      </Grid>
    );
  }
}
