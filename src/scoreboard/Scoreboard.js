import firebase from 'firebase/app';
import React, { useState, useEffect } from 'react';
import {
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  makeStyles,
  Grid,
} from '@material-ui/core';

import FirebaseService from '../services/Firebase.serivce';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  scoreboard: {
    backgroundColor: '#000',
    textAlign: 'center',
  },
  scoreboardText: {
    color: 'red',
    fontSize: '4em',
  },
  scoreButton: {
    minHeight: '75px',
  }
});

export default function Scoreboard() {
  const classes = useStyles();
  const [scoreboardStats, setScoreboardStats] = useState([]);
  const [teamOneScore, setTeamOneScore] = useState('0');
  const [teamTwoScore, setTeamTwoScore] = useState('0');
  let isIncrementingScore = true;
  let scoreboardRef = FirebaseService.getDatabaseRef('scoreboard');

  useEffect(() => {
    scoreboardRef.on('value', snap => {
      const scores = snap.val();
      setScoreboardStats(Object.values(scores));
      calculateTeamScores(scores);
    });
    // TODO: fix the use effect thing - scoreboardRef gets recreated on every update - probably memory leak
  }, []);

  const calculateTeamScores = (scores) => {
    const { goalie_one, goalie_two, striker_one, striker_two } = scores;
    const teamOneScore = goalie_one.goals + striker_one.goals + goalie_two.own_goals + striker_two.own_goals;
    const teamTwoScore = goalie_two.goals + striker_two.goals + goalie_one.own_goals + striker_one.own_goals;
    setTeamOneScore(teamOneScore);
    setTeamTwoScore(teamTwoScore);
  }

  const handleGoalieOneGoalClicked = () => {
    let modifier;
    if (isIncrementingScore) {
      modifier = firebase.database.ServerValue.increment(1)
    } else {
      modifier = firebase.database.ServerValue.increment(-1)
    }
    scoreboardRef.child('goalie_one/goals').set(modifier);
    scoreboardRef.child('goalie_two/goals_allowed').set(modifier);
  }

  const handleGoalieOneOwnGoalClicked = () => {
    let modifier;
    if (isIncrementingScore) {
      modifier = firebase.database.ServerValue.increment(1)
    } else {
      modifier = firebase.database.ServerValue.increment(-1)
    }
    scoreboardRef.child('goalie_one/own_goals').set(modifier);
    scoreboardRef.child('goalie_one/goals_allowed').set(modifier);
  }

  const handleStrikerOneGoalClicked = () => {
    let modifier;
    if (isIncrementingScore) {
      modifier = firebase.database.ServerValue.increment(1)
    } else {
      modifier = firebase.database.ServerValue.increment(-1)
    }
    scoreboardRef.child('striker_one/goals').set(modifier);
    scoreboardRef.child('goalie_two/goals_allowed').set(modifier);
  }

  const handleStrikerOneOwnGoalClicked = () => {
    let modifier;
    if (isIncrementingScore) {
      modifier = firebase.database.ServerValue.increment(1)
    } else {
      modifier = firebase.database.ServerValue.increment(-1)
    }
    scoreboardRef.child('striker_one/own_goals').set(modifier);
    scoreboardRef.child('goalie_one/goals_allowed').set(modifier);
  }

  const handleGoalieTwoGoalClicked = () => {
    let modifier;
    if (isIncrementingScore) {
      modifier = firebase.database.ServerValue.increment(1)
    } else {
      modifier = firebase.database.ServerValue.increment(-1)
    }
    scoreboardRef.child('goalie_two/goals').set(modifier);
    scoreboardRef.child('goalie_one/goals_allowed').set(modifier);
  }

  const handleGoalieTwoOwnGoalClicked = () => {
    let modifier;
    if (isIncrementingScore) {
      modifier = firebase.database.ServerValue.increment(1)
    } else {
      modifier = firebase.database.ServerValue.increment(-1)
    }
    scoreboardRef.child('goalie_two/own_goals').set(modifier);
    scoreboardRef.child('goalie_two/goals_allowed').set(modifier);
  }

  const handleStrikerTwoGoalClicked = () => {
    let modifier;
    if (isIncrementingScore) {
      modifier = firebase.database.ServerValue.increment(1)
    } else {
      modifier = firebase.database.ServerValue.increment(-1)
    }
    scoreboardRef.child('striker_two/goals').set(modifier);
    scoreboardRef.child('goalie_one/goals_allowed').set(modifier);
  }

  const handleStrikerTwoOwnGoalClicked = () => {
    let modifier;
    if (isIncrementingScore) {
      modifier = firebase.database.ServerValue.increment(1)
    } else {
      modifier = firebase.database.ServerValue.increment(-1)
    }
    scoreboardRef.child('striker_two/own_goals').set(modifier);
    scoreboardRef.child('goalie_two/goals_allowed').set(modifier);
  }

  const handleResetGameClicked = () => {
    scoreboardRef.child('goalie_one/goals').set(0);
    scoreboardRef.child('goalie_one/goals_allowed').set(0);
    scoreboardRef.child('goalie_one/own_goals').set(0);
    scoreboardRef.child('striker_one/goals').set(0);
    scoreboardRef.child('striker_one/own_goals').set(0);
    scoreboardRef.child('goalie_two/goals').set(0);
    scoreboardRef.child('goalie_two/goals_allowed').set(0);
    scoreboardRef.child('goalie_two/own_goals').set(0);
    scoreboardRef.child('striker_two/goals').set(0);
    scoreboardRef.child('striker_two/own_goals').set(0);
  }

  const handlePlusMinusClicked = () => {
    isIncrementingScore = !isIncrementingScore;
  }

  const handleViewStatsClicked = () => {
    console.log('view stats');
  }

  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <div className={classes.scoreboard}>
            <span className={classes.scoreboardText}>{teamOneScore} : {teamTwoScore}</span>
          </div>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            fullWidth className={classes.scoreButton}
            onClick={handleGoalieOneGoalClicked}
            color="primary">
              Goalie 1 Goal
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            fullWidth className={classes.scoreButton}
            onClick={handleGoalieTwoGoalClicked}
            color="primary">
              Goalie 2 Goal
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            fullWidth className={classes.scoreButton}
            onClick={handleGoalieOneOwnGoalClicked}
            color="default">
              Goalie 1 Own Goal
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            fullWidth className={classes.scoreButton}
            onClick={handleGoalieTwoOwnGoalClicked}
            color="default">
              Goalie 2 Own Goal
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            fullWidth className={classes.scoreButton}
            onClick={handleStrikerOneGoalClicked}
            color="primary">
              Striker 1 Goal
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            fullWidth className={classes.scoreButton}
            onClick={handleStrikerTwoGoalClicked}
            color="primary">
              Striker 2 Goal
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            fullWidth className={classes.scoreButton}
            onClick={handleStrikerOneOwnGoalClicked}
            color="default">
              Striker 1 Own Goal
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            fullWidth className={classes.scoreButton}
            onClick={handleStrikerTwoOwnGoalClicked}
            color="default">
              Striker 2 Own Goal
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="outlined" 
            fullWidth className={classes.scoreButton}
            onClick={handlePlusMinusClicked}
            color="default">
              +/-
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="outlined" 
            fullWidth className={classes.scoreButton}
            onClick={handleViewStatsClicked}
            color="default">
              View Stats
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="outlined" 
            fullWidth className={classes.scoreButton}
            onClick={handleResetGameClicked}
            color="default">
              Reset Game
          </Button>
        </Grid>
      </Grid>
      {/*
      <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Player</TableCell>
              <TableCell align="right">G</TableCell>
              <TableCell align="right">GA</TableCell>
              <TableCell align="right">OG</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {scoreboardStats.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.goals}</TableCell>
                <TableCell align="right">{row.goals_allowed}</TableCell>
                <TableCell align="right">{row.own_goals}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> */}
    </>
  );
}
