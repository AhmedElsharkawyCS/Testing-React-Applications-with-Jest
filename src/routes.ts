import { lazy } from "react";
import { IRoute } from "./types/Route";
const Courses = lazy(() => import("./pages/Courses"));
const CourseDetails = lazy(() => import("./pages/CourseDetails"));

export const AppRoutes: Array<IRoute> = [
  { path: "/", exact: true, name: "Courses", component: Courses },
  { path: "/:courseId", exact: true, name: "Course Information", component: CourseDetails },
];
