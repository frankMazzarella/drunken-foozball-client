import React from 'react';
import { Grid, makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';

// TODO: this JSON file many mysterious acronyms that should be spelled out for sanity and consistency
import players from './players.json';

const useStyles = makeStyles(() => ({
  header: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 72,
    padding: 40,
    backgroundColor: '#00b4f1',
  },
  positionHeader: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 36,
    padding: 20,
    color: '#00b4f1',
    borderBottom: '1px solid #61978e',
  },
  statsHeader: {
    color: '#61978e',
    borderBottom: '1px solid #61978e',
    textAlign: 'center',
    padding: 5,
  },
  table: {
    width: '100%',
    fontFamily: 'Roboto',
    borderCollapse: 'collapse',
    textAlign: 'center',
    border: '1px solid #61978e',
    padding: 10,
  },
  name: {
    borderBottom: 'none',
    color: '#00b4f1',
    padding: 5,
    borderRight: '1px solid #61978e',
    textAlign: 'center',
  },
  stats: {
    borderBottom: 'none',
    padding: 5,
    border: '1px dotted #61978e',
    textAlign: 'center',
  },
}));

export default function Home() {
  const classes = useStyles();

  function addStriker(player) {
    if (player.position === 'striker') {
      return (
        <TableRow key={player.name}>
          <TableCell className={classes.name}>{player.name}</TableCell>
          <TableCell className={classes.stats}>{player.currentStats.gm}</TableCell>
          <TableCell className={classes.stats}>{player.currentStats.w}</TableCell>
          <TableCell className={classes.stats}>{player.currentStats.winPercentage}</TableCell>
          <TableCell className={classes.stats}>{player.currentStats.PP}</TableCell>
          <TableCell className={classes.stats}>{player.currentStats.g}</TableCell>
          <TableCell className={classes.stats}>{player.currentStats.ggm}</TableCell>
          <TableCell className={classes.stats}>{player.currentStats.og}</TableCell>
        </TableRow>
      );
    }
  }

  function addGoalkeeper(player) {
    if (player.position === 'goalkeeper') {
      return (
        <TableRow key={player.name}>
          <TableCell className={classes.name}>{player.name}</TableCell>
          <TableCell className={classes.stats}>{player.currentStats.gm}</TableCell>
          <TableCell className={classes.stats}>{player.currentStats.w}</TableCell>
          <TableCell className={classes.stats}>{player.currentStats.winPercentage}</TableCell>
          <TableCell className={classes.stats}>{player.currentStats.PP}</TableCell>
          <TableCell className={classes.stats}>{player.currentStats.g}</TableCell>
          <TableCell className={classes.stats}>{player.currentStats.ggm}</TableCell>
          <TableCell className={classes.stats}>{player.currentStats.ga}</TableCell>
          <TableCell className={classes.stats}>{player.currentStats.gagm}</TableCell>
          <TableCell className={classes.stats}>{player.currentStats.og}</TableCell>
        </TableRow>
      );
    }
  }

  return (
    <Grid container width="100%" direction="column" alignItems="center">
      <TableContainer>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell className={classes.header} colSpan={8}>DFL Stats</TableCell>
            </TableRow>
          </TableHead>
          <TableHead>
            <TableRow>
              <TableCell className={classes.positionHeader} colSpan={8}>Strikers</TableCell>
            </TableRow>
          </TableHead>
          <TableHead>
            <TableRow>
              <TableCell className={classes.statsHeader}>Player</TableCell>
              <TableCell className={classes.statsHeader}>Games</TableCell>
              <TableCell className={classes.statsHeader}>Wins</TableCell>
              <TableCell className={classes.statsHeader}>Win %</TableCell>
              <TableCell className={classes.statsHeader}>TiP</TableCell>
              <TableCell className={classes.statsHeader}>Goals</TableCell>
              <TableCell className={classes.statsHeader}>aG/Gm</TableCell>
              <TableCell className={classes.statsHeader}>OG</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              players.map((player) => (
                addStriker(player)
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>

      <TableContainer>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell className={classes.positionHeader} colSpan={10}>Goalkeepers</TableCell>
            </TableRow>
          </TableHead>
          <TableHead>
            <TableRow>
              <TableCell className={classes.statsHeader}>Player</TableCell>
              <TableCell className={classes.statsHeader}>Games</TableCell>
              <TableCell className={classes.statsHeader}>Wins</TableCell>
              <TableCell className={classes.statsHeader}>Win %</TableCell>
              <TableCell className={classes.statsHeader}>TiP</TableCell>
              <TableCell className={classes.statsHeader}>Goals</TableCell>
              <TableCell className={classes.statsHeader}>aG/Gm</TableCell>
              <TableCell className={classes.statsHeader}>GA</TableCell>
              <TableCell className={classes.statsHeader}>aGA/Gm</TableCell>
              <TableCell className={classes.statsHeader}>OG</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              players.map((player) => (
                addGoalkeeper(player)
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}
