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
  container: {
    maxWidth: '800px',
  },
  scoreboard: {
    backgroundColor: '#000',
    textAlign: 'center',
    borderRadius: '5px',
  },
  scoreboardText: {
    color: 'red',
    fontSize: '8em',
    fontFamily: 'ds-digital',
  },
  scoreButton: {
    minHeight: '75px',
  },
  table: {
    width: '100%',
  },
  tableHeader: {
    fontWeight: 'bold',
  }
});

export default function Scoreboard() {
  const classes = useStyles();
  const [scoreboardStats, setScoreboardStats] = useState([]);
  const [teamOneScore, setTeamOneScore] = useState('00');
  const [teamTwoScore, setTeamTwoScore] = useState('00');
  const [subtractPoint, setSubtractPoint] = useState(false);
  let scoreboardRef = FirebaseService.getDatabaseRef('scoreboard');

  useEffect(() => {
    scoreboardRef.on('value', snap => {
      const scores = snap.val();
      setScoreboardStats(Object.values(scores));
      calculateTeamScores(scores);
    });
  }, []);

  const calculateTeamScores = (scores) => {
    const { goalie_one, goalie_two, striker_one, striker_two } = scores;
    const teamOneScore = goalie_one.goals + striker_one.goals + goalie_two.own_goals + striker_two.own_goals;
    const teamTwoScore = goalie_two.goals + striker_two.goals + goalie_one.own_goals + striker_one.own_goals;
    setTeamOneScore(teamOneScore.toString().padStart(2, '0'));
    setTeamTwoScore(teamTwoScore.toString().padStart(2, '0'));
  }

  const handleGoalieOneGoalClicked = () => {
    let modifier;
    if (subtractPoint) {
      modifier = firebase.database.ServerValue.increment(-1)
    } else {
      modifier = firebase.database.ServerValue.increment(1)
    }
    scoreboardRef.child('goalie_one/goals').set(modifier);
    scoreboardRef.child('goalie_two/goals_allowed').set(modifier);
    setSubtractPoint(false);
  }

  const handleGoalieOneOwnGoalClicked = () => {
    let modifier;
    if (subtractPoint) {
      modifier = firebase.database.ServerValue.increment(-1)
    } else {
      modifier = firebase.database.ServerValue.increment(1)
    }
    scoreboardRef.child('goalie_one/own_goals').set(modifier);
    scoreboardRef.child('goalie_one/goals_allowed').set(modifier);
    setSubtractPoint(false);
  }

  const handleStrikerOneGoalClicked = () => {
    let modifier;
    if (subtractPoint) {
      modifier = firebase.database.ServerValue.increment(-1)
    } else {
      modifier = firebase.database.ServerValue.increment(1)
    }
    scoreboardRef.child('striker_one/goals').set(modifier);
    scoreboardRef.child('goalie_two/goals_allowed').set(modifier);
    setSubtractPoint(false);
  }

  const handleStrikerOneOwnGoalClicked = () => {
    let modifier;
    if (subtractPoint) {
      modifier = firebase.database.ServerValue.increment(-1)
    } else {
      modifier = firebase.database.ServerValue.increment(1)
    }
    scoreboardRef.child('striker_one/own_goals').set(modifier);
    scoreboardRef.child('goalie_one/goals_allowed').set(modifier);
    setSubtractPoint(false);
  }

  const handleGoalieTwoGoalClicked = () => {
    let modifier;
    if (subtractPoint) {
      modifier = firebase.database.ServerValue.increment(-1)
    } else {
      modifier = firebase.database.ServerValue.increment(1)
    }
    scoreboardRef.child('goalie_two/goals').set(modifier);
    scoreboardRef.child('goalie_one/goals_allowed').set(modifier);
    setSubtractPoint(false);
  }

  const handleGoalieTwoOwnGoalClicked = () => {
    let modifier;
    if (subtractPoint) {
      modifier = firebase.database.ServerValue.increment(-1)
    } else {
      modifier = firebase.database.ServerValue.increment(1)
    }
    scoreboardRef.child('goalie_two/own_goals').set(modifier);
    scoreboardRef.child('goalie_two/goals_allowed').set(modifier);
    setSubtractPoint(false);
  }

  const handleStrikerTwoGoalClicked = () => {
    let modifier;
    if (subtractPoint) {
      modifier = firebase.database.ServerValue.increment(-1)
    } else {
      modifier = firebase.database.ServerValue.increment(1)
    }
    scoreboardRef.child('striker_two/goals').set(modifier);
    scoreboardRef.child('goalie_one/goals_allowed').set(modifier);
    setSubtractPoint(false);
  }

  const handleStrikerTwoOwnGoalClicked = () => {
    let modifier;
    if (subtractPoint) {
      modifier = firebase.database.ServerValue.increment(-1)
    } else {
      modifier = firebase.database.ServerValue.increment(1)
    }
    scoreboardRef.child('striker_two/own_goals').set(modifier);
    scoreboardRef.child('goalie_two/goals_allowed').set(modifier);
    setSubtractPoint(false);
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
    setSubtractPoint(!subtractPoint);
  }

  const handleSaveStatsClicked = () => {
    console.log('save stats');
  }

  return (
    <Grid className={classes.container} container spacing={1}>
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
            {subtractPoint
              ? "Subtract Goalie 1 Goal"
              : "Goalie 1 Goal"
            }
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button
          variant="contained"
          fullWidth className={classes.scoreButton}
          onClick={handleGoalieTwoGoalClicked}
          color="primary">
            {subtractPoint
              ? "Subtract Goalie 2 Goal"
              : "Goalie 2 Goal"
            }
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button
          variant="contained"
          fullWidth className={classes.scoreButton}
          onClick={handleGoalieOneOwnGoalClicked}
          color="default">
            {subtractPoint
              ? "Subtract Goalie 1 Own Goal"
              : "Goalie 1 Own Goal"
            }
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button
          variant="contained"
          fullWidth className={classes.scoreButton}
          onClick={handleGoalieTwoOwnGoalClicked}
          color="default">
            {subtractPoint
              ? "Subtract Goalie 2 Own Goal"
              : "Goalie 2 Own Goal"
            }
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button
          variant="contained"
          fullWidth className={classes.scoreButton}
          onClick={handleStrikerOneGoalClicked}
          color="primary">
            {subtractPoint
              ? "Subtract Striker 1 Goal"
              : "Striker 1 Goal"
            }
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button
          variant="contained"
          fullWidth className={classes.scoreButton}
          onClick={handleStrikerTwoGoalClicked}
          color="primary">
            {subtractPoint
              ? "Subtract Striker 2 Goal"
              : "Striker 2 Goal"
            }
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button
          variant="contained"
          fullWidth className={classes.scoreButton}
          onClick={handleStrikerOneOwnGoalClicked}
          color="default">
            {subtractPoint
              ? "Subtract Striker 1 Own Goal"
              : "Striker 1 Own Goal"
            }
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button
          variant="contained"
          fullWidth className={classes.scoreButton}
          onClick={handleStrikerTwoOwnGoalClicked}
          color="default">
            {subtractPoint
              ? "Subtract Striker 2 Own Goal"
              : "Striker 2 Own Goal"
            }
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
          disabled
          variant="outlined"
          fullWidth className={classes.scoreButton}
          onClick={handleSaveStatsClicked}
          color="default">
            Save Stats
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
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell className={classes.tableHeader}>Player</TableCell>
                <TableCell className={classes.tableHeader} align="right">G</TableCell>
                <TableCell className={classes.tableHeader} align="right">GA</TableCell>
                <TableCell className={classes.tableHeader} align="right">OG</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {scoreboardStats.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">{row.name}</TableCell>
                  <TableCell align="right">{row.goals}</TableCell>
                  <TableCell align="right">{row.goals_allowed}</TableCell>
                  <TableCell align="right">{row.own_goals}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
