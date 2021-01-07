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
    this.state = { editorValue: '' };
    this.handleSaveClicked = this.handleSaveClicked.bind(this);
    this.handleEditorValueChange = this.handleEditorValueChange.bind(this);
    this.rulesRef = FirebaseService.getDatabaseRef('rules');
  }

  componentDidMount() {
    this.rulesRef.on('value', snap => {
      this.setState({ editorValue: atob(snap.val()) });
    });
  }

  handleSaveClicked() {
    try {
      JSON.parse(this.state.editorValue);
    } catch (error) {
      return console.error('shit cant do the json');
    }
    this.rulesRef.set(btoa(this.state.editorValue), (error) => {
      if (error) {
        console.log('a wild error has appeared');
        console.error(error);
      } else {
        console.log('done');
      }
    });
  }

  handleEditorValueChange(newValue) {
    this.setState({ editorValue: newValue });
  }

  render() {
    return (
      <Grid container direction="column" alignItems="center">
        <Grid item xs={12}>
          <Button variant="contained" component={Link} to="/admin">Go Back</Button>
          <Button variant="contained" onClick={this.handleSaveClicked} color="primary">Save</Button>
        </Grid>
        <AceEditor
          defaultValue="Loading..."
          value={this.state.editorValue}
          onChange={this.handleEditorValueChange}
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
