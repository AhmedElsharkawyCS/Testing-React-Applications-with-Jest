import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Spinner from "./components/common/Spinner";
const AppContainer = lazy(() => import("./containers"));
function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Router>
        <Switch>
          <Route path='/' render={(props) => <AppContainer {...props} />} />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
