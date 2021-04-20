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
  TextField,
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
  const [goalie1Name, setGoalie1Name] = useState('Goalie 1');
  const [goalie2Name, setGoalie2Name] = useState('Goalie 2');
  const [striker1Name, setStriker1Name] = useState('Striker 1');
  const [striker2Name, setStriker2Name] = useState('Striker 2');
  let scoreboardRef = FirebaseService.getDatabaseRef('scoreboard');

  useEffect(() => {
    scoreboardRef.on('value', snap => {
      const data = snap.val();
      setScoreboardStats(Object.values(data));
      calculateTeamScores(data);
      setGoalie1Name(data.goalie_one.name);
      setGoalie2Name(data.goalie_two.name);
      setStriker1Name(data.striker_one.name);
      setStriker2Name(data.striker_two.name);
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

  const handleGoalie1NameChanged = () => {
    scoreboardRef.child('goalie_one/name').set(goalie1Name);
  }

  const handleGoalie2NameChanged = () => {
    scoreboardRef.child('goalie_two/name').set(goalie2Name);
  }

  const handleStriker1NameChanged = () => {
    scoreboardRef.child('striker_one/name').set(striker1Name);
  }

  const handleStriker2NameChanged = () => {
    scoreboardRef.child('striker_two/name').set(striker2Name);
  }

  const handleResetGameClicked = () => {
    scoreboardRef.child('goalie_one/goals').set(0);
    scoreboardRef.child('goalie_one/goals_allowed').set(0);
    scoreboardRef.child('goalie_one/own_goals').set(0);
    scoreboardRef.child('goalie_one/name').set('Goalie 1');
    scoreboardRef.child('striker_one/goals').set(0);
    scoreboardRef.child('striker_one/own_goals').set(0);
    scoreboardRef.child('striker_one/name').set('Striker 1');
    scoreboardRef.child('goalie_two/goals').set(0);
    scoreboardRef.child('goalie_two/goals_allowed').set(0);
    scoreboardRef.child('goalie_two/own_goals').set(0);
    scoreboardRef.child('goalie_two/name').set('Goalie 2');
    scoreboardRef.child('striker_two/goals').set(0);
    scoreboardRef.child('striker_two/own_goals').set(0);
    scoreboardRef.child('striker_two/name').set('Striker 2');
    setSubtractPoint(false);
  }

  const handlePlusMinusClicked = () => {
    setSubtractPoint(!subtractPoint);
  }

  const handleSaveStatsClicked = () => {
    const body = buildEmailString();
    window.open(`mailto:?subject=foozball results&body=${body}`);
  }

  const buildEmailString = () => {
    let str = `
      Game Name:
      Timestamp: ${new Date().getTime()}
      Team One: ${teamOneScore}
      Team Two: ${teamTwoScore}
    `;
    scoreboardStats.forEach((row) => {
      str += `
        ${row.name}
        Goals: ${row.goals}
        Goals Allowed: ${row.goals_allowed ? row.goals_allowed : 'N/A'}
        Own Goals: ${row.own_goals}
      `;
    });
    return encodeURIComponent(str);
  }

  return (
    <Grid className={classes.container} container spacing={1}>
      <Grid item xs={12}>
        <div className={classes.scoreboard}>
          <span className={classes.scoreboardText}>{teamOneScore} : {teamTwoScore}</span>
        </div>
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
              {scoreboardStats.map((row, index) => (
                <TableRow key={index}>
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
      <Grid item xs={6}>
        <TextField
          label="Goalie 1 Name"
          value={goalie1Name}
          onChange={event => setGoalie1Name(event.target.value)}
          onBlur={handleGoalie1NameChanged}
          variant="filled"
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Striker 1 Name"
          value={striker1Name}
          onChange={event => setStriker1Name(event.target.value)}
          onBlur={handleStriker1NameChanged}
          variant="filled"
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Goalie 2 Name"
          value={goalie2Name}
          onChange={event => setGoalie2Name(event.target.value)}
          onBlur={handleGoalie2NameChanged}
          variant="filled"
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Striker 2 Name"
          value={striker2Name}
          onChange={event => setStriker2Name(event.target.value)}
          onBlur={handleStriker2NameChanged}
          variant="filled"
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <Button
          variant="contained"
          fullWidth className={classes.scoreButton}
          onClick={handleGoalieOneGoalClicked}
          color="primary">
            {subtractPoint
              ? "Subtract " + goalie1Name + " Goal"
              : goalie1Name + " Goal"
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
              ? "Subtract " + goalie2Name + " Goal"
              : goalie2Name + " Goal"
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
              ? "Subtract " + goalie1Name + " Own Goal"
              : goalie1Name + " Own Goal"
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
              ? "Subtract " + goalie2Name + " Own Goal"
              : goalie2Name + " Own Goal"
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
              ? "Subtract " + striker1Name + " Goal"
              : striker1Name + " Goal"
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
              ? "Subtract " + striker2Name + " Goal"
              : striker2Name + " Goal"
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
              ? "Subtract " + striker1Name + " Own Goal"
              : striker1Name + " Own Goal"
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
              ? "Subtract " + striker2Name + " Own Goal"
              : striker2Name + " Own Goal"
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
    </Grid>
  );
}
