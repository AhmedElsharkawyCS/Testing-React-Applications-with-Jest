import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

// Inspired by the Facebook spinners.
const useStylesFacebook = makeStyles({
  root: {
    position: "relative",
    marginTop: "50px",
  },
  top: {
    color: "#eef3fd",
  },
  bottom: {
    marginLeft: "-39px",
    color: "#6798e5",
    animationDuration: "550ms",
    // position: "absolute",
    // left: "49%",
    textAlign: "center",
  },
});

function FacebookProgress(props: any) {
  const classes = useStylesFacebook();

  return (
    <div className={classes.root}>
      <CircularProgress variant='determinate' value={100} className={classes.top} size={40} thickness={4} {...props} />
      <CircularProgress variant='indeterminate' disableShrink className={classes.bottom} size={40} thickness={4} {...props} />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
    justifyContent: "center",
  },
  // margin: {
  //   margin: theme.spacing(1),
  // },
}));

export default function Spinner() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FacebookProgress />
    </div>
  );
}
