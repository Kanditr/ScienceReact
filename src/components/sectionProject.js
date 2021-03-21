import React, { useEffect, useState } from "react";
import firebaseConfig from "../config";
import { Link } from "react-router-dom";
// material-ui
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import "fontsource-roboto";
import Chip from "@material-ui/core/Chip";

function SectionProject() {
  const [projects, setProject] = useState([]);
  const [status, setStatus] = useState(false);

  const db = firebaseConfig.firestore().collection("User");

  function getProject() {
    db.limit(9).onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setProject(items);
      setStatus(false);
    });
  }

  function filterProject(testname) {
    db.where("type", "==", testname)
      .limit(10)
      .onSnapshot((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
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
    <div className={classes.root}>
      <div>
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
            x
            label="Reset"
            onClick={getProject}
            variant="outlined"
            className={classes.chip}
          />
        </Grid>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {projects.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>{card.message}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    {/* to change into button with handleClick function */}
                    <Link
                      to={{
                        pathname: "/testreceive",
                        value: card.name,
                      }}
                    >
                      Test
                    </Link>
                    {/* to change into button with handleClick function */}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
      {/* <div className="mt-5">
        <div className="col-sm-12">
          <div className="row row-cols-3">
            {projects.map((project) => (
              <div
                className="col-sm-4"
                key={project.name}
                style={{ margin: `0px 0px 30px 0px` }}
              >
                <div className="card">
                  <div className="card-body">
                   
                    <Link
                      to={{
                        pathname: "/testreceive",
                        value: project.name,
                      }}
                      className="card-title"
                    >
                      {project.name}
                    </Link>
                    
                    <h6 className="card-subtitle mb-2 text-muted">
                      {project.type}
                    </h6>
                    <p className="card-text">{project.message}</p>
                    <p className="card-text">{project.fund}</p>
                    <a href={`mailto:${project.email}`} className="card-link">
                      {project.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default SectionProject;
