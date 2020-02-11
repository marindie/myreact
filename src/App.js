import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

const Home = lazy(() => import ('./components/Home'));
const Image = lazy(() => import ('./components/Image'));
const SignUp = lazy(() => import ('./components/SignUp'));
const SignUpResult = lazy(() => import ('./components/SignUpResult'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/image" component={Image}/>
          <Route exact path="/sign-up" component={SignUp}/>
          <Route exact path="/sign-up-result" component={SignUpResult}/>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
