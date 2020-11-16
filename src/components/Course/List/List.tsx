import React from "react";
import { Theme, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import { ICourseItem } from "../../../types/Course";
import Item from "./Item";
import { coursesData } from "../../../data";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function CourseList() {
  const classes = useStyles();
  return (
    <List className={classes.root}>
      {coursesData.map((item: ICourseItem, index: number) => (
        <Item {...item} key={index} />
      ))}
    </List>
  );
}
