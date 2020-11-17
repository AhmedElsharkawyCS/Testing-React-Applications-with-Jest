import React, { useEffect, useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import { useParams } from "react-router-dom";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Alert from "@material-ui/lab/Alert";
import { getFirstCharFromString } from "../../../utils/Strings";
import { coursesData } from "../../../data";
import { ICourseItem } from "../../../types/Course";
import Spinner from "../../Common/Spinner";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 500,
      display: "inline-block",
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);

export default function CourseDetails() {
  const classes = useStyles();
  const [courseData, setCourseData] = useState<ICourseItem>();
  const [Loading, setLoading] = useState<boolean>(true);

  const { courseId } = useParams<any>();

  useEffect(() => {
    const [course] = coursesData.filter((i: ICourseItem) => i.id === Number(courseId));
    if (course) {
      setCourseData(course);
      setLoading(false);
    }
  }, [courseId]);

  if (Loading) {
    return <Spinner />;
  }
  if (!courseData) {
    return <Alert severity='error'>Course not exist!!</Alert>;
  }
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label='recipe' className={classes.avatar}>
            {getFirstCharFromString(courseData.title)}
          </Avatar>
        }
        action={
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        }
        title={courseData.title}
      />
      <CardMedia className={classes.media} image={courseData.icon} title={courseData.title} />
      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          {courseData.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label='share'>
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
