import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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
		border: '1px solid #61978e',
	},
	
	stats_header: {
		color: '#61978e',
		borderBottom: '1px solid #61978e',
		textAlign: 'center',
		padding: 5,
	},

	stats_table: {
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
		
function createStrikerData(name, games, wins, per, tip, goals, g_gm, og) {
	return { name, games, wins, per, tip, goals, g_gm, og };
}

function createGoalieData(name, games, wins, per, tip, goals, g_gm, og, ga, ga_gm) {
	return { name, games, wins, per, tip, goals, g_gm, og, ga, ga_gm };
}

const striker_rows = [
	createStrikerData('Lacy', 3, 1, 0.333, 26, 18, 6.00, 1),
	createStrikerData('Bear', 3, 3, 1.000, 30, 17, 5.67, 0),
	createStrikerData('Woodsy', 4, 2, 0.500, 31, 16, 4.00, 0),
	createStrikerData('Kevin', 2, 0, 0.000, 6, 3, 1.50, 0),
];

const goalie_rows = [
	createGoalieData('Lep', 3, 3, 1.000, 30, 13, 4.33, 0, 14, 4.67),
	createGoalieData('Marissa', 3, 1, 0.333, 26, 8, 2.67, 1, 23, 7.67),
	createGoalieData('Rev', 4, 2, 0.500, 31, 15, 3.75, 0, 36, 9.00),
	createGoalieData('Katelyn', 2, 0, 0.000, 6, 3, 1.50, 0, 20, 10.00),
];

export default function Home() {
  const classes = useStyles();

  return (
	<Grid container direction="column" alignItems="center">
		<TableContainer>
			<Table className={classes.stats_table}>
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
					{striker_rows.map(row => (
						<TableRow key={row.name}>
							<TableCell style={{borderBottom: "none"}} className={classes.name}>{row.name}</TableCell>
							<TableCell style={{borderBottom: "none"}} className={classes.stats}>{row.games}</TableCell>
							<TableCell style={{borderBottom: "none"}} className={classes.stats}>{row.wins}</TableCell>
							<TableCell style={{borderBottom: "none"}} className={classes.stats}>{row.per}</TableCell>
							<TableCell style={{borderBottom: "none"}} className={classes.stats}>{row.tip}</TableCell>
							<TableCell style={{borderBottom: "none"}} className={classes.stats}>{row.goals}</TableCell>
							<TableCell style={{borderBottom: "none"}} className={classes.stats}>{row.g_gm}</TableCell>
							<TableCell style={{borderBottom: "none"}} className={classes.stats}>{row.og}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
		
		<TableContainer>
			<Table className={classes.stats_table}>
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
				<TableBody className="stats_info">
					{goalie_rows.map(row => (
						<TableRow key={row.name}>
							<TableCell style={{borderBottom: "none"}} className={classes.name}>{row.name}</TableCell>
							<TableCell style={{borderBottom: "none"}} className={classes.stats}>{row.games}</TableCell>
							<TableCell style={{borderBottom: "none"}} className={classes.stats}>{row.wins}</TableCell>
							<TableCell style={{borderBottom: "none"}} className={classes.stats}>{row.per}</TableCell>
							<TableCell style={{borderBottom: "none"}} className={classes.stats}>{row.tip}</TableCell>
							<TableCell style={{borderBottom: "none"}} className={classes.stats}>{row.goals}</TableCell>
							<TableCell style={{borderBottom: "none"}} className={classes.stats}>{row.g_gm}</TableCell>
							<TableCell style={{borderBottom: "none"}} className={classes.stats}>{row.og}</TableCell>
							<TableCell style={{borderBottom: "none"}} className={classes.stats}>{row.ga}</TableCell>
							<TableCell style={{borderBottom: "none"}} className={classes.stats}>{row.ga_gm}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	</Grid>
  );
}



