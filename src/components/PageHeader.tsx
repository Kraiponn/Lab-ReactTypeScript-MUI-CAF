import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { IconProps } from "@material-ui/core/Icon";
import { Card, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#fdfdff",
    },
    pageHeader: {
      padding: theme.spacing(4),
      display: "flex",
      marginBottom: theme.spacing(2),
    },
    pageIcon: {
      display: "inline-block",
      // display: "flex",
      // alignItems: "center",
      padding: theme.spacing(4),
      color: "#3c44b1",
    },
    pageTitle: {
      padding: theme.spacing(4),
      "& .MuiTypography-subtitle2": {
        opacity: "0.6",
      },
    },
  })
);

interface Iprops {
  title: string;
  subTitle: string;
  icon: IconProps;
}

const PageHeader: React.FC<Iprops> = ({ title, subTitle, icon }) => {
  const classes = useStyles();

  return (
    <Paper elevation={0} square className={classes.root}>
      <div className={classes.pageHeader}>
        <Card className={classes.pageIcon}>{icon}</Card>
        <div className={classes.pageTitle}>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="subtitle2" component="div">
            {subTitle}
          </Typography>
        </div>
      </div>
    </Paper>
  );
};

export default PageHeader;
