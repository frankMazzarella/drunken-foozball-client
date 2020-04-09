import React from 'react';
import {
  Grid,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Card,
  CardHeader
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  header: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 72,
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
    border: '1px solid #61978e',
    marginTop: 15,
    padding: 10,
  },
  team: {
    color: '#00b4f1',
    padding: 5,
    border: '1px dotted #61978e',
    textAlign: 'center',
  },
  rank: {
    padding: 5,
    border: '1px dotted #61978e',
    textAlign: 'center',
  },
}));

// TODO: no reason for this function
function createRank(rank, team, points, record) {
  return { rank, team, points, record };
}

const ranks = [
  createRank(1, 'S.A.M.', 1360, '17-3'),
  createRank(2, 'Rock of Gibraltar', 610, '9-9'),
  createRank(3, 'Free Will', 570, '8-11'),
  createRank(4, 'Fire Breathing Rubber Duckies', 180, '2-8'),
  createRank(5, 'Rev and Kev', 80, '1-3'),
  createRank(6, 'Rev and Riss', 50, '2-1'),
  createRank(7, 'Sophomores', 45, '1-2'),
  createRank(8, 'Blackish Assholes', 10, '0-2'),
];

export default function Home() {
  const classes = useStyles();
  const warning = `NOTICE: The S.A.M. team is currently under investigation for cheating
    and unsportsman like conduct during the 2019 Drunken Foozball Championship.`

  return (
    <Grid container direction="column" alignItems="center">
      <Card raised>
        <CardHeader title={warning} />
      </Card>
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
              <TableCell className={classes.rank_header}>Record</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ranks.map(row => (
              <TableRow key={row.rank}>
                <TableCell style={{ borderBottom: "none" }} className={classes.rank}>{row.rank}</TableCell>
                <TableCell style={{ borderBottom: "none" }} className={classes.team}>{row.team}</TableCell>
                <TableCell style={{ borderBottom: "none" }} className={classes.rank}>{row.points}</TableCell>
                <TableCell style={{ borderBottom: "none" }} className={classes.rank}>{row.record}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}
