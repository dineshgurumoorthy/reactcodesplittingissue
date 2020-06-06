import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import baseLoadable from '@loadable/component';

const RouteChunk = baseLoadable(() => import('./RouteChunk'));
const ModuleChunk = baseLoadable(() => import('./ModuleChunk'));
function App() {
  return (
    <Router>
      <h1>React Chunking</h1>
      <div>
        <ModuleChunk fallback={<div>Loading....</div>} />
      </div>
      <div>
        <Route path="/lazy" component={RouteChunk} />
      </div>
    </Router>
  );
}
export default App;
