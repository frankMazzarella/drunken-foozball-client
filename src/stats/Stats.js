import React from 'react';
import { Grid, makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import players from '../players.json';

const useStyles = makeStyles(() => ({
  header: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 72,
    padding: 40,
    backgroundColor: '#00b4f1',
  },
  position_header: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 36,
    padding: 20,
    color: '#00b4f1',
    borderBottom: '1px solid #61978e',
  },
  stats_header: {
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
    color: '#00b4f1',
    padding: 5,
    borderRight: '1px solid #61978e',
    textAlign: 'center',
  },
  stats: {
    padding: 5,
    border: '1px dotted #61978e',
    textAlign: 'center',
  },
}));

export default function Home() {
  const classes = useStyles();

  function addStriker(player) {
		if(player.position == 'striker')
			return <TableRow key={player.name}>
				<TableCell style={{borderBottom: "none"}} className={classes.name}>{player.name}</TableCell>
				<TableCell style={{borderBottom: "none"}} className={classes.stats}>{player.current_stats.gm}</TableCell>
				<TableCell style={{borderBottom: "none"}} className={classes.stats}>{player.current_stats.w}</TableCell>
				<TableCell style={{borderBottom: "none"}} className={classes.stats}>{player.current_stats.win_per}</TableCell>
				<TableCell style={{borderBottom: "none"}} className={classes.stats}>{player.current_stats.PP}</TableCell>
				<TableCell style={{borderBottom: "none"}} className={classes.stats}>{player.current_stats.g}</TableCell>
				<TableCell style={{borderBottom: "none"}} className={classes.stats}>{player.current_stats.ggm}</TableCell>
				<TableCell style={{borderBottom: "none"}} className={classes.stats}>{player.current_stats.og}</TableCell>
				</TableRow>;
		return null;
		}

  function addGoalkeeper(player) {
		if(player.position == 'goalkeeper')
			return <TableRow key={player.name}>
				<TableCell style={{borderBottom: "none"}} className={classes.name}>{player.name}</TableCell>
				<TableCell style={{borderBottom: "none"}} className={classes.stats}>{player.current_stats.gm}</TableCell>
				<TableCell style={{borderBottom: "none"}} className={classes.stats}>{player.current_stats.w}</TableCell>
				<TableCell style={{borderBottom: "none"}} className={classes.stats}>{player.current_stats.win_per}</TableCell>
				<TableCell style={{borderBottom: "none"}} className={classes.stats}>{player.current_stats.PP}</TableCell>
				<TableCell style={{borderBottom: "none"}} className={classes.stats}>{player.current_stats.g}</TableCell>
				<TableCell style={{borderBottom: "none"}} className={classes.stats}>{player.current_stats.ggm}</TableCell>
				<TableCell style={{borderBottom: "none"}} className={classes.stats}>{player.current_stats.ga}</TableCell>
				<TableCell style={{borderBottom: "none"}} className={classes.stats}>{player.current_stats.gagm}</TableCell>
				<TableCell style={{borderBottom: "none"}} className={classes.stats}>{player.current_stats.og}</TableCell>
				</TableRow>;
		return null;
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
              <TableCell className={classes.position_header} colSpan={8}>Strikers</TableCell>
            </TableRow>
          </TableHead>
          <TableHead>
            <TableRow>
              <TableCell className={classes.stats_header}>Player</TableCell>
              <TableCell className={classes.stats_header}>Games</TableCell>
              <TableCell className={classes.stats_header}>Wins</TableCell>
              <TableCell className={classes.stats_header}>Win %</TableCell>
              <TableCell className={classes.stats_header}>TiP</TableCell>
              <TableCell className={classes.stats_header}>Goals</TableCell>
              <TableCell className={classes.stats_header}>G/Gm</TableCell>
              <TableCell className={classes.stats_header}>OG</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {players.map((player, index) => (
              addStriker(player)
            ))}
				  </TableBody>
        </Table>
      </TableContainer>

      <TableContainer>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell className={classes.position_header} colSpan={10}>Goalkeepers</TableCell>
            </TableRow>
          </TableHead>
          <TableHead>
            <TableRow>
              <TableCell className={classes.stats_header}>Player</TableCell>
              <TableCell className={classes.stats_header}>Games</TableCell>
              <TableCell className={classes.stats_header}>Wins</TableCell>
              <TableCell className={classes.stats_header}>Win %</TableCell>
              <TableCell className={classes.stats_header}>TiP</TableCell>
              <TableCell className={classes.stats_header}>Goals</TableCell>
              <TableCell className={classes.stats_header}>G/Gm</TableCell>
              <TableCell className={classes.stats_header}>OG</TableCell>
              <TableCell className={classes.stats_header}>GA</TableCell>
              <TableCell className={classes.stats_header}>GA/Gm</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {players.map((player, index) => (
              addGoalkeeper(player)
            ))}
				  </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}
