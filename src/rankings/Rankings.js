import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import teams from '../teams.json';

const useStyles = makeStyles(() => ({
	header: {
		textAlign: 'center',
		fontFamily: 'Roboto',
		fontSize: 58,
		padding: 40,
		whiteSpace: 'nowrap',
		backgroundColor: '#00b4f1',
	},

	rank_header: {
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
		border: '1px solid #00b4f1',
		padding: 10,
	},

	team: {
		color: '#00b4f1',
		padding: 1,
		borderLeft: '1px dotted #61978e',
		borderBottom: '1px dotted #61978e',
		textAlign: 'center',
	},

	rank: {
		padding: 5,
		border: '1px dotted #61978e',
		textAlign: 'center',
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
							<TableCell className={classes.header} colSpan={8}>DFL Rankings</TableCell>
						</TableRow>
					</TableHead>
					<TableHead>
						<TableRow>
							<TableCell className={classes.rank_header}>Rank</TableCell>
							<TableCell className={classes.rank_header}>Team</TableCell>
							<TableCell className={classes.rank_header}>Points</TableCell>
							<TableCell className={classes.rank_header} style={{borderRight: '1px solid #00b4f1'}}>Record</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{teams.map((team, index) => (
							<TableRow key={team.rank}>
								<TableCell className={classes.rank}>{team.current.rank}</TableCell>
								<TableCell className={classes.team}>{team.name}</TableCell>
								<TableCell className={classes.rank}>{team.current.points}</TableCell>
								<TableCell style={{borderRight: '1px solid #00b4f1'}} className={classes.rank}>{team.current.wins}-{team.current.losses}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Grid>
	);
}



