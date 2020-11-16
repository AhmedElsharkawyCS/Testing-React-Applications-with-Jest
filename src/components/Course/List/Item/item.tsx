import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { ICourseItem } from "../../../../types/Course";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginBottom: 20,
    },
    inline: {
      display: "inline",
      fontWeight: "bolder",
    },
    avatar: {
      width: theme.spacing(8),
      height: theme.spacing(8),
    },
    chip: {
      margin: 5,
    },
    text: {
      paddingLeft: 20,
    },
  }),
);

export default function Item(props: ICourseItem) {
  const classes = useStyles();
  const history = useHistory();
  return (
    <ListItem alignItems='flex-start' className={classes.root}>
      <ListItemAvatar>
        <Avatar alt={props.title} src={props.icon} className={classes.avatar} />
      </ListItemAvatar>
      <ListItemText
        className={classes.text}
        primary={props.title}
        secondary={
          <React.Fragment>
            <Typography component='span' variant='body2' className={classes.inline} color='textPrimary'>
              Features:
            </Typography>
            {props.features.map((name: string, index: number) => (
              <Chip label={name} key={index} className={classes.chip} />
            ))}
          </React.Fragment>
        }
      />
      <ListItemSecondaryAction>
        <Button variant='contained' color='primary' onClick={() => history.push(`/${props.id}`)} endIcon={<ArrowRightAltIcon />}>
          More
        </Button>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
