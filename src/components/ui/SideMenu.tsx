// rafce
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sideMenu: {
      display: "flex",
      flexDirection: "column",
      position: "absolute",
      left: "0px",
      width: "320px",
      height: "100vh",
      backgroundColor: "#253053",
    },
  })
);

const SideMunu = () => {
  const classes = useStyles();

  return <div className={classes.sideMenu}></div>;
};

export default SideMunu;
