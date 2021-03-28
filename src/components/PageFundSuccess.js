import React, { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import Header from "./Header";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useLocation, Redirect } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

function PageFundSuccess() {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    layout: {
      width: "auto",
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(960 + theme.spacing(2) * 2)]: {
        width: 960,
        marginLeft: "auto",
        marginRight: "auto",
      },
    },
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    },
    button: {
      //   marginTop: theme.spacing(3),
      margin: theme.spacing(1),
    },
  }));

  const classes = useStyles();
  const Location = useLocation();
  const [ProjectId, setProjectId] = useState("");

  useEffect(() => {
    const Id = Location.value;
    setProjectId(Id);
  }, []);

  return (
    <>
      <Header />
      <div className={classes.layout}>
        <Paper className={classes.paper}>
          <Container component="main" className={classes.main} maxWidth="md">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography component="h4" variant="body1" align="center">
                  {ProjectId}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography component="h1" variant="h4" align="center">
                  Thank you for your support!
                </Typography>
              </Grid>
              <Grid container item xs={12} justify="center">
                <Button
                  style={{ textTransform: "none" }}
                  size="small"
                  variant="outlined"
                  className={classes.button}
                  component={Link}
                  to={{
                    pathname: "/",
                    value: ProjectId,
                  }}
                >
                  Back to homepage
                </Button>
                <Button
                  style={{ textTransform: "none" }}
                  size="small"
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                  component={Link}
                  to={{
                    pathname: "/viewproject",
                    value: ProjectId,
                  }}
                >
                  View project page
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Paper>
      </div>
    </>
  );
}

export default PageFundSuccess;
