import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import tourneys from '../tourneys.json';

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
  tourn_name: {
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
  loc: {
    borderBottom: '1px solid #00b4f1',
    padding: 5,
    fontSize: 18,
  },
  results: {
    borderBottom: 'none',
    padding: 5,
    fontSize: 16,
  },
  games_header: {
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

export default function Home() {
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
              <TableCell style={{border: '1px solid #00b4f1'}} colSpan={4}></TableCell>
            </TableRow>
					</TableHead>
					<TableBody>
            {tourneys.map((tourney, index) => (
              <>
							<TableRow>
                <TableCell className={classes.level} rowSpan={3}>{tourney.level}</TableCell>
                <TableCell className={classes.tourn_name} colSpan={3}>{tourney.name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.date} colSpan={2}>{tourney.date}</TableCell>
                <TableCell className={classes.date}>Winner</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.loc} colSpan={2}>{tourney.loc}</TableCell>
                <TableCell className={classes.loc} style={{color: '#00b4f1'}}>{tourney.results[0].team}</TableCell>
              </TableRow>
              {tourney.results.map((result, r_index) => (
                <TableRow>
                  <TableCell className={classes.results}>{result.finish}</TableCell>
                  <TableCell className={classes.results} colSpan={2}>{result.team}</TableCell>
                  <TableCell className={classes.results}>{result.points}</TableCell>
                </TableRow>
              ))}
              {tourney.rounds.map((round, ro_index) => (
                <>
                <TableRow>
                  <TableCell className={classes.games_header} style={{borderRight: '1px solid #00b4f1'}} rowSpan={round.games.length+1}>{round.name}</TableCell>
                  <TableCell className={classes.games_header}>Winner</TableCell>
                  <TableCell className={classes.games_header}>Loser</TableCell>
                  <TableCell className={classes.games_header}>Score</TableCell>
                </TableRow>
                {round.games.map((game, g_index) => (
                  <>
                  <TableRow>
                    <TableCell className={classes.games}>{game.winner}</TableCell>
                    <TableCell className={classes.games}>{game.loser}</TableCell>
                    <TableCell className={classes.games}>{game.score}</TableCell>
                  </TableRow>
                  </>
                ))}
                </>
              ))}
              <TableRow>
                <TableCell style={{border: '1px solid #00b4f1'}} colSpan={4}></TableCell>
              </TableRow>
              </>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Grid>
	);
}



