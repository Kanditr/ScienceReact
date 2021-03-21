import React, { useContext } from "react";
import { AuthContext } from "./Auth";
import Header from "./Header";
import Banner from "./Banner";
import DashBoard from "./Dashboard";
import { Link } from "react-router-dom";
import SectionProject from "./sectionProject";
// material-ui
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const Home = () => {
  const { currentUser } = useContext(AuthContext);

  // material-ui styles -> to be enhance to our styles
  const useStyles = makeStyles((theme) => ({
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
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
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
  }));
  // end of styles

  const classes = useStyles();

  function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="/">
          Science3
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  if (!currentUser) {
    return (
      <>
        <div>
          <Header />
          <Banner />
          <SectionProject />
          {/* Footer */}
          <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
              Footer
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              color="textSecondary"
              component="p"
            >
              Something here to give the footer a purpose!
            </Typography>
            <Copyright />
          </footer>
          {/* End footer */}
        </div>
      </>
    );
  }

  return (
    <>
      <div>
        <Header />
        <Banner />
        <DashBoard />
        <SectionProject />
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            Something here to give the footer a purpose!
          </Typography>
          <Copyright />
        </footer>
        {/* End footer */}
      </div>
    </>
  );
};

export default Home;
