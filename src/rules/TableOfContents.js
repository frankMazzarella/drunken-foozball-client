import React, { Component } from 'react';
import { Link } from 'react-scroll';
import { Typography } from '@material-ui/core';

import rules from './rules.json';

export default class TableOfContents extends Component {
  getChapters() {
    return rules.map((chapter, index) => {
      const chapterNumber = index + 1;
      return (
        <ul key={chapterNumber}>
          <li><Typography variant="body1">{`${chapterNumber + 1}. ${chapter.chapterTitle}`}</Typography></li>
          {this.getSections(chapter, chapterNumber)}
        </ul>
      )
    })
  }

  getSections(chapter, chapterNumber) {
    return chapter.sections.map((section, index) => {
      const sectionNumber = `${chapterNumber}.${index + 1}`
      return (
        <Typography key={index} variant="body2">
          <Link to={sectionNumber} duration={1000} offset={-65} smooth>{`${sectionNumber}. ${section.sectionTitle}`}</Link>
        </Typography>
      )
    })
  }

  render() {
    return this.getChapters();
  }
}
