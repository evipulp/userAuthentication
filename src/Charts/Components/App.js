import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import ProTip from "./ProTip";
import SessionTracker from "./SessionTracker";

export default function App() {
  return (
    <div>
      <Grid
        direction="row"
        justify="space-evenly"
        alignItems="center"
        width="300px"
        xs={12}
        marginTop
      >
        <SessionTracker />

        <ProTip />
      </Grid>
    </div>
  );
}
