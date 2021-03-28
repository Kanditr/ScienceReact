import React, { useState, useEffect, useContext } from "react";
import firebaseConfig from "../config";
import { AuthContext } from "./Auth";
import Button from "@material-ui/core/Button";
import Header from "./Header";
import { Link, useLocation, Redirect } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";

function PageFundProject() {
  const db = firebaseConfig.firestore();
  const { currentUser } = useContext(AuthContext);
  const [project, setProject] = useState([]);
  const [newFund, setNewFund] = useState([]);
  let Location = useLocation();
  let ProjectId = Location.value;
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    var docRef = db.collection("projects").doc(ProjectId);
    docRef.onSnapshot((doc) => {
      if (doc.exists) {
        console.log("Document data:", doc.data());
        setProject(doc.data());
      } else {
        console.log("No such document!");
      }
    });
    console.log(redirect);
  }, []);

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      marginLeft: theme.spacing(-2),
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
      [theme.breakpoints.up(960 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    },
    main: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(2),
    },
    test: {
      fontWeight: 400,
    },
    button: {
      marginLeft: theme.spacing(1),
    },
  }));

  const classes = useStyles();

  function sendMessage(e) {
    e.preventDefault();
    var addFund = parseInt(e.target.fundAmount.value);
    var currentFund = parseInt(project.currentFunding);
    var newFund = addFund + currentFund;
    var docRef = db.collection("projects").doc(ProjectId);
    function updateDoc() {
      docRef.update({
        currentFunding: newFund,
      });
    }
    setNewFund(newFund);
    updateDoc();
    setRedirect(true);
  }

  if (redirect) {
    return (
      <Redirect
        to={{
          pathname: "/fundsuccess",
          value: ProjectId,
        }}
      />
    );
  }

  return (
    <>
      <Header />
      <div className={classes.layout}>
        <CssBaseline />
        <Paper className={classes.paper}>
          {/* <React.Fragment> */}
          <form onSubmit={sendMessage}>
            <Container component="main" className={classes.main} maxWidth="md">
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="h3" component="h3">
                    {project.projectName}
                  </Typography>
                </Grid>
                <Grid item xs={12} className={classes.main}>
                  <Typography component={"span"}>
                    <Box fontWeight="fontWeightBold">Current Funding</Box>
                  </Typography>
                  <Box mt={1}>{`${project.currentFunding} THB`}</Box>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Typography component={"h1"} gutterBottom>
                    <Box fontWeight="fontWeightBold">Funding</Box>
                  </Typography>
                  <Box mt={1}>
                    <TextField
                      required
                      id="fundAmount"
                      name="fundAmount"
                      label="Amount THB"
                      variant="outlined"
                      fullWidth
                    />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    style={{ textTransform: "none" }}
                    size="small"
                    variant="outlined"
                    component={Link}
                    to={{
                      pathname: "/viewproject",
                      value: ProjectId,
                    }}
                  >
                    Back
                  </Button>
                  <Button
                    className={classes.button}
                    style={{ textTransform: "none" }}
                    size="small"
                    color="primary"
                    variant="contained"
                    type="submit"
                  >
                    Proceed
                  </Button>
                </Grid>
              </Grid>
            </Container>
          </form>
          {/* </React.Fragment> */}
        </Paper>
      </div>
    </>
  );
}

export default PageFundProject;
