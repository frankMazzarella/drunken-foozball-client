import React from 'react';
import {
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  scoreboard: {
    backgroundColor: '#000',
  },
  scoreboardText: {
    color: 'red',
  }
});

const rows = [
  {
    name: 'Goalie 1',
    goals: 1,
    goalsAllowed: 2,
    ownGoals: 3,
  },
  {
    name: 'Striker 1',
    goals: 4,
    goalsAllowed: 5,
    ownGoals: 6,
  },
  {
    name: 'Goalie 2',
    goals: 7,
    goalsAllowed: 8,
    ownGoals: 9,
  },
  {
    name: 'Striker 2',
    goals: 10,
    goalsAllowed: 11,
    ownGoals: 12,
  }
];

export default function Scoreboard() {
  const classes = useStyles();

  const handleGoalieOneGoalClicked = () => {
    console.log('goalie 1 goal');
  }

  const handleGoalieOneOwnGoalClicked = () => {
    console.log('goalie 1 own goal');
  }

  const handleStrikerOneGoalClicked = () => {
    console.log('striker 1 goal');
  }

  const handleStrikerOneOwnGoalClicked = () => {
    console.log('striker 1 own goal');
  }

  const handleGoalieTwoGoalClicked = () => {
    console.log('goalie 2 goal');
  }

  const handleGoalieTwoOwnGoalClicked = () => {
    console.log('goalie 2 own goal');
  }

  const handleStrikerTwoGoalClicked = () => {
    console.log('striker 2 goal');
  }

  const handleStrikerTwoOwnGoalClicked = () => {
    console.log('striker 2 own goal');
  }

  const handlePlusMinusClicked = () => {
    console.log('plus minus');
  }

  const handleViewStatsClicked = () => {
    console.log('view stats');
  }

  const handleResetGameClicked = () => {
    console.log('reset game');
  }

  return (
    <>
      <div className={classes.scoreboard}>
        <span className={classes.scoreboardText}>00 : 00</span>
      </div>
      <br />
      <Button variant="contained" onClick={handleGoalieOneGoalClicked} color="primary">Goalie 1 Goal</Button>
      <Button variant="contained" onClick={handleGoalieOneOwnGoalClicked} color="primary">Goalie 1 Own Goal</Button>
      <Button variant="contained" onClick={handleStrikerOneGoalClicked} color="primary">Striker 1 Goal</Button>
      <Button variant="contained" onClick={handleStrikerOneOwnGoalClicked} color="primary">Striker 1 Own Goal</Button>
      <br /><br />
      <Button variant="contained" onClick={handleGoalieTwoGoalClicked} color="primary">Goalie 2 Goal</Button>
      <Button variant="contained" onClick={handleGoalieTwoOwnGoalClicked} color="primary">Goalie 2 Own Goal</Button>
      <Button variant="contained" onClick={handleStrikerTwoGoalClicked} color="primary">Striker 2 Goal</Button>
      <Button variant="contained" onClick={handleStrikerTwoOwnGoalClicked} color="primary">Striker 2 Own Goal</Button>
      <br /><br />
      <Button variant="contained" onClick={handlePlusMinusClicked} color="primary">+/-</Button>
      <Button variant="contained" onClick={handleViewStatsClicked} color="primary">View Stats</Button>
      <Button variant="contained" onClick={handleResetGameClicked} color="primary">Reset Game</Button>
      <br /><br />
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
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.goals}</TableCell>
                <TableCell align="right">{row.goalsAllowed}</TableCell>
                <TableCell align="right">{row.ownGoals}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
