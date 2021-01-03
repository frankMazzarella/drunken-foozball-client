import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function Admin() {
  return (
    <Grid container direction="column" alignItems="center">
      <Grid item sm={10} lg={8}>
        Admin<br /><br />
        <Button component={Link} to="/admin/edit-rules" variant="contained">Edit Rules</Button>
      </Grid>
    </Grid>
  );
}
