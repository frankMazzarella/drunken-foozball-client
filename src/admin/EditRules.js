import React, { Component } from 'react';
import * as monaco from 'monaco-editor';

export default class EditRules extends Component {
  editor;
  
  componentDidMount() {
    this.editor = monaco.editor.create(document.getElementById('container'), {
      value: '{}',
      // language: 'json',
      theme: 'vs-dark',
      renderWhitespace: 'boundary',
      tabSize: 2
    });
  }

  componentWillUnmount() {
    this.editor.dispose();
  }

  render() {
    return (
      <div id="container" style={{ height: '100%' }}></div>
    );
  }
}
