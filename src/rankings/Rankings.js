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
  CardHeader,
  CardContent,
  Typography
} from '@material-ui/core';

// TODO: this JSON file has inconsistent, abbreviated, and nonsensical naming conventions
import teams from './teams.json';

const useStyles = makeStyles(() => ({
  header: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 72,
    padding: 40,
    whiteSpace: 'nowrap',
    backgroundColor: '#00b4f1',
  },
  rankHeader: {
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

export default function Home() {
  const classes = useStyles();
  const warning = `NOTICE: The S.A.M. team is currently under investigation for cheating
    and unsportsman like conduct during the 2019 Drunken Foozball Championship.`
  const warning2 = `NOTICE: The Rock of Gibraltar team is currently under investigation for cheating
    and unsportsman like conduct during the 2019 Drunken Foozball Championship, even though they couldn't win.`

  return (
    <Grid container direction="column" alignItems="center">
      <Card raised>
        <CardHeader title={warning} />
      </Card>
      <Card raised>
        <CardHeader title={warning2} />
        <CardContent>
        <Typography variant="body2" component="p">
          Hi, Woodsy here. We let Lep submit changes to the website on occasion. Its a really nice thing to let
          him try to help. He does his best. You can probably tell what pages have been designed by him and which not...
          Everytime he submits a change to the website he attempts to remove the above banner. This time he seems to
          have added his own. Its been a rough year, so we're just gonna let him have this one.
          Thanks everyone for your understanding and I apologise profusely for any confusion/inconvenience.<br />< br />
          -- Woodsy
        </Typography>
        </CardContent>
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
              <TableCell className={classes.rankHeader}>Rank</TableCell>
              <TableCell className={classes.rankHeader}>Team</TableCell>
              <TableCell className={classes.rankHeader}>Points</TableCell>
              <TableCell className={classes.rankHeader}>Record</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              teams.map((team, index) => (
                <TableRow key={index}>
                  <TableCell className={classes.rank}>{team.current.rank}</TableCell>
                  <TableCell className={classes.team}>{team.name}</TableCell>
                  <TableCell className={classes.rank}>{team.current.points}</TableCell>
                  <TableCell className={classes.rank}>{team.current.wins}-{team.current.losses}
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}
