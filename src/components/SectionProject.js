import React, { useEffect, useState } from "react";
import firebaseConfig from "../config";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

function SectionProject() {
  const [projects, setProject] = useState([]);
  const [status, setStatus] = useState(false);
  const db = firebaseConfig.firestore().collection("projects");

  function getProject() {
    db.limit(21).onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, data: doc.data() });
      });
      setProject(items);
    });
  }

  function filterProject(testname) {
    db.where("category", "==", testname)
      .limit(10)
      .onSnapshot((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push({ id: doc.id, data: doc.data() });
        });
        setProject(items);
        setStatus(true);
      });
  }

  useEffect(() => {
    if (status == false) {
      getProject();
    } else {
      filterProject();
    }
  }, []);

  console.log(projects);

  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(5),
      },
    },
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(5),
      // paddingBottom: theme.spacing(8),
    },
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    cardMedia: {
      paddingTop: "56.25%", // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
    chip: {
      margin: theme.spacing(0.5),
    },
  }));

  const classes = useStyles();

  return (
    <>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          <Grid container justify="center">
            <Chip
              size="small"
              label="Tech"
              onClick={() => filterProject("Tech")}
              variant="outlined"
              className={classes.chip}
            />
            <Chip
              size="small"
              label="Community"
              onClick={() => filterProject("Community")}
              variant="outlined"
              className={classes.chip}
            />
            <Chip
              size="small"
              label="Science"
              onClick={() => filterProject("Science")}
              variant="outlined"
              className={classes.chip}
            />
            <Chip
              size="small"
              label="Reset filter"
              onClick={getProject}
              variant="outlined"
              className={classes.chip}
            />
            <Chip
              size="small"
              label="View all projects"
              variant="outlined"
              className={classes.chip}
              onClick={() => {
                console.log("Redirect");
              }}
              component={Link}
              to={{
                pathname: "/viewallprojects",
              }}
            />
          </Grid>
          {projects.map((project) => (
            <Grid item key={project.id} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {project.data.projectName}
                  </Typography>
                  <Typography>{project.data.description}</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  <Link
                    to={{
                      pathname: "/viewproject",
                      value: project.id,
                    }}
                  >
                    Test
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default SectionProject;
