import React, { Component } from 'react';

import rules from './rules.json';
import { Typography } from '@material-ui/core';

export default class TableOfContents extends Component {
  getChapters() {
    return rules.map((chapter, chapterIndex) => {
      return (
        <ul key={chapterIndex}>
          <li><Typography variant="body1">{`${chapterIndex + 1}. ${chapter.chapterTitle}`}</Typography></li>
          {this.getSections(chapter, chapterIndex)}
        </ul>
      )
    })
  }

  getSections(chapter, chapterIndex) {
    return chapter.sections.map((section, sectionIndex) => {
      return (
        <Typography key={sectionIndex} variant="body2">
          {`${chapterIndex + 1}.${sectionIndex + 1}. ${section.sectionTitle}`}
        </Typography>
      )
    })
  }

  render() {
    return this.getChapters();
  }
}
