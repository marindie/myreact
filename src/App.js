import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

const Home = lazy(() => import ('./components/Home'));
const Image = lazy(() => import ('./components/Image'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/image" component={Image}/>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
