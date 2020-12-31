import React from "react";
import {
  Theme,
  createStyles,
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { PeopleOutlineTwoTone } from "@material-ui/icons";

import SideMunu from "components/ui/SideMenu";
import Header from "components/ui/Header";
import PageHeader from "components/PageHeader";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c44b126",
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526",
    },
    background: {
      default: "#f4f5fd",
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: "translateZ(0)",
      },
    },
  },
  // props: {
  //   MuiIconButton: {
  //     disableRipple: true,
  //   },
  // },
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appMain: {
      paddingLeft: "320px",
      width: "100%",
    },
  })
);

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SideMunu />
      <div className={classes.appMain}>
        <Header />
        <PageHeader
          title="CodeMakerLab"
          subTitle="Welcome to code maker lab"
          icon={<PeopleOutlineTwoTone fontSize="large" />}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
