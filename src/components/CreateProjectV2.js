import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import { Link, Redirect } from "react-router-dom";
import Header from "./Header";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import firebaseConfig from "../config";

function CreateProjectV2() {
  var db = firebaseConfig.firestore();

  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    layout: {
      width: "auto",
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
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
    stepper: {
      padding: theme.spacing(3, 0, 5),
    },
    button: {
      marginTop: theme.spacing(3),
    },
    completed: {
      display: "inline-block",
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(2),
    },
    formControl: {
      minWidth: 120,
    },
  }));

  function getSteps() {
    return ["General Information", "Project Budget", "Review information"];
  }

  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const steps = getSteps();
  const [params, setParams] = useState({
    projectName: "",
    description: "",
    budget: "",
    category: "",
    createdBy: "",
  });
  const [success, setSuccess] = useState("");

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" to="/">
          Science3
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  function sendMessage(e) {
    e.preventDefault();
    let user = firebaseConfig.auth().currentUser;
    const values = {
      projectName: e.target.projectName.value,
      description: e.target.description.value,
      budget: e.target.budget.value,
      category: e.target.category.value,
      createdBy: user.email,
    };
    setParams(values);
    console.log(values);
    db.collection("projects").add(values);
    setSuccess("true");
  }

  if (success) {
    return (
      <Redirect
        to={{
          pathname: "/testreceive",
          value: params.projectName,
        }}
      />
    );
  }

  // Test

  console.log(params);
  console.log(success);

  // End test

  return (
    <>
      <Header />
      <div className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Create Project
          </Typography>
          <Stepper
            nonLinear
            activeStep={activeStep}
            className={classes.stepper}
          >
            {steps.map((label, index) => (
              <Step key={label}>
                <StepButton
                  onClick={handleStep(index)}
                  completed={completed[index]}
                >
                  {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            <CssBaseline />
            <Typography
              variant="h6"
              gutterBottom
              className={classes.instructions}
            >
              General Information
            </Typography>

            {/* form start */}

            <form onSubmit={sendMessage}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="projectName"
                    name="projectName"
                    label="Project name"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="description"
                    name="description"
                    label="Description"
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="budget"
                    name="budget"
                    label="Budget"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel htmlFor="outlined-age-native-simple">
                      Category
                    </InputLabel>
                    <Select
                      native
                      //   value={state.category}
                      //   onChange={handleChange}
                      label="Category"
                      inputProps={{
                        name: "category",
                        id: "outlined-age-native-simple",
                      }}
                    >
                      <option aria-label="None" value="" />
                      <option value={"Tech"}>Tech</option>
                      <option value={"Science"}>Science</option>
                      <option value={"Community"}>Community</option>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className={classes.button}
              >
                Submit
              </Button>
            </form>

            {/* form end */}
          </React.Fragment>
        </Paper>
        <Copyright />
      </div>
    </>
  );
}

export default CreateProjectV2;
