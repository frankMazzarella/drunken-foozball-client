import React from 'react';
import { Grid, makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';

import tournaments from './tournaments.json';

const useStyles = makeStyles(() => ({
  header: {
    fontSize: 44,
    textAlign: 'center',
    padding: 40,
    whiteSpace: 'nowrap',
    backgroundColor: '#00b4f1',
  },
  level: {
    fontSize: 30,
    textAlign: 'center',
    padding: 20,
    backgroundColor: '#00b4f1',
    border: '1px solid #00b4f1',
  },
  tournamentName: {
    fontSize: 24,
    color: '#00b4f1',
    borderTop: '1px solid #00b4f1',
    borderBottom: 'none',
    padding: 5,
  },
  date: {
    fontSize: 18,
    borderBottom: 'none',
    padding: 5,
  },
  location: {
    borderBottom: '1px solid #00b4f1',
    padding: 5,
    fontSize: 18,
  },
  results: {
    borderBottom: 'none',
    padding: 5,
    fontSize: 16,
  },
  gamesHeader: {
    borderBottom: 'none',
    borderTop: '1px solid #00b4f1',
    padding: 5,
    textAlign: 'center',
    fontSize: 16,
  },
  games: {
    borderBottom: 'none',
    padding: 5,
    textAlign: 'center',
    color: '#61978e',
    fontSize: 16,
  },
  table: {
    width: '100%',
    fontFamily: 'Roboto',
    borderCollapse: 'collapse',
    textAlign: 'center',
    border: '1px solid #00b4f1',
  },
}));

export default function Tournaments() {
  const classes = useStyles();

  return (
    <Grid container direction="column" alignItems="center">
      <TableContainer>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell className={classes.header} colSpan={4}>DFL Tournaments</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ border: '1px solid #00b4f1' }} colSpan={4}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              tournaments.map((tourney, index) => (
                <React.Fragment key={index}>
                  <TableRow>
                    <TableCell className={classes.level} rowSpan={3}>{tourney.level}</TableCell>
                    <TableCell className={classes.tournamentName} colSpan={3}>{tourney.name}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.date} colSpan={2}>{tourney.date}</TableCell>
                    <TableCell className={classes.date}>Winner</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.location} colSpan={2}>{tourney.location}</TableCell>
                    <TableCell className={classes.location} style={{ color: '#00b4f1' }}>
                      {tourney.results[0].team}
                    </TableCell>
                  </TableRow>
                  {
                    tourney.results.map((result, index) => (
                      <TableRow key={index}>
                        <TableCell className={classes.results}>{result.finish}</TableCell>
                        <TableCell className={classes.results} colSpan={2}>{result.team}</TableCell>
                        <TableCell className={classes.results}>{result.points}</TableCell>
                      </TableRow>
                    ))
                  }
                  {tourney.rounds.map((round, index) => (
                    <React.Fragment key={index}>
                      <TableRow>
                        <TableCell className={classes.gamesHeader} style={{ borderRight: '1px solid #00b4f1' }}
                          rowSpan={round.games.length + 1}>{round.name}</TableCell>
                        <TableCell className={classes.gamesHeader}>Winner</TableCell>
                        <TableCell className={classes.gamesHeader}>Loser</TableCell>
                        <TableCell className={classes.gamesHeader}>Score</TableCell>
                      </TableRow>
                      {
                        round.games.map((game, index) => (
                          <React.Fragment key={index}>
                            <TableRow>
                              <TableCell className={classes.games}>{game.winner}</TableCell>
                              <TableCell className={classes.games}>{game.loser}</TableCell>
                              <TableCell className={classes.games}>{game.score}</TableCell>
                            </TableRow>
                          </React.Fragment>
                        ))
                      }
                    </React.Fragment>
                  ))}
                  <TableRow>
                    <TableCell style={{ border: '1px solid #00b4f1' }} colSpan={4}></TableCell>
                  </TableRow>
                </React.Fragment>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}
