import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from 'src/containers/App';

const AppRouter:React.FunctionComponent = () => {
  return (
    <Router>
      <Route path="/" component={App} />
    </Router>
  )
};

export default AppRouter;
