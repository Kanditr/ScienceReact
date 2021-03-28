import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import firebaseConfig from "../config";
import Header from "./Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import { AuthContext } from "./Auth";

const PageViewProject = () => {
  const db = firebaseConfig.firestore();
  const { currentUser } = useContext(AuthContext);
  const [project, setProject] = useState([]);
  let Location = useLocation();
  let ProjectId = Location.value;

  console.log(ProjectId);

  useEffect(() => {
    var docRef = db.collection("projects").doc(ProjectId);
    docRef
      .get()
      .then(function (doc) {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          setProject(doc.data());
        } else {
          console.log("No such document!");
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  }, []);

  // Test log
  console.log(project.createdBy);

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

  const isOwner = currentUser.email === project.createdBy;

  console.log(currentUser);

  return (
    <>
      <Header />
      <div className={classes.layout}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Container component="main" className={classes.main} maxWidth="md">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="h3" component="h3" gutterbottom="true">
                  {project.projectName}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Box mb={5} gutterbottom="true">
                  <Chip
                    variant="outlined"
                    size="small"
                    label={project.category}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box>
                  <Typography
                    variant="body1"
                    component="h2"
                    gutterbottom="true"
                  >
                    {project.description}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box display="flex" justifyContent="flex-end">
                  <Typography variant="h6" component="h6" gutterbottom="true">
                    {`${project.budget} THB`}
                  </Typography>
                </Box>
                <Box display="flex" justifyContent="flex-end">
                  <Typography
                    variant="body1"
                    component="h6"
                    gutterbottom="true"
                  >
                    {`Current Funding: ${project.currentFunding} THB`}
                  </Typography>
                </Box>
                <Box display="flex" justifyContent="flex-end" mt={1}>
                  <Button
                    style={{ textTransform: "none" }}
                    size="small"
                    variant="outlined"
                    component={Link}
                    to={{
                      pathname: "/fundproject",
                      value: ProjectId,
                    }}
                  >
                    {"Fund this project"}
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" component="h6" gutterbottom="true">
                  {`Project Owner: ${project.createdBy}`}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  style={{ textTransform: "none" }}
                  size="small"
                  variant="outlined"
                  component={Link}
                  to={"/"}
                >
                  Back
                </Button>
                {isOwner ? (
                  <Button
                    className={classes.button}
                    style={{ textTransform: "none" }}
                    size="small"
                    variant="outlined"
                    component={Link}
                    to={"#"}
                  >
                    Edit project
                  </Button>
                ) : (
                  <></>
                )}
              </Grid>
            </Grid>
          </Container>
        </Paper>
      </div>
    </>
  );
};

export default PageViewProject;
