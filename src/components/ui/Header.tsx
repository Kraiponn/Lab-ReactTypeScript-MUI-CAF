import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  AppBar,
  Badge,
  Grid,
  IconButton,
  InputBase,
  Toolbar,
} from "@material-ui/core";
import {
  ChatBubbleOutline,
  NotificationsNone,
  PowerSettingsNew,
  Search,
} from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#ffffff",
    },
    searchInput: {
      opacity: "0.6",
      padding: `0px ${theme.spacing(1)}px`,
      fontSize: "0.8rem",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#f2f2f2",
      },
      "& .MuiSvgIcon-root": {
        marginRight: theme.spacing(1),
      },
    },
  })
);

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item>
            <InputBase
              className={classes.searchInput}
              placeholder="Search topics"
              startAdornment={<Search fontSize="small" />}
            />
          </Grid>
          <Grid item sm></Grid>
          <Grid item>
            <IconButton>
              <Badge badgeContent={9} color="secondary">
                <NotificationsNone fontSize="small" />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={3} color="primary">
                <ChatBubbleOutline fontSize="small" />
              </Badge>
            </IconButton>
            <IconButton>
              <PowerSettingsNew fontSize="large" color="secondary" />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
