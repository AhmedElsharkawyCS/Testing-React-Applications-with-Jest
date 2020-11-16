import React, { Suspense } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Switch, Route } from "react-router-dom";
import Spinner from "../components/common/Spinner";
import { AppRoutes } from "../routes";
import { IRoute } from "../types/Route";

const useStyles = makeStyles((theme) => ({
  root: {},
  rootDiv: {
    textAlign: "center",
    padding: 50,
  },
}));

export default function AppContainer(props: any) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='xl'>
        <div className={classes.rootDiv}>
          <Switch>
            <Suspense fallback={<Spinner />}>
              {AppRoutes.map((route: IRoute, index: number) => (
                <Route exact={route.exact} path={route.path} render={(props: any) => <route.component {...props} key={index} />} />
              ))}
            </Suspense>
          </Switch>
        </div>
      </Container>
    </React.Fragment>
  );
}
