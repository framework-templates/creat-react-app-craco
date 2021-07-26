import { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from 'src/views/home';
import Journal from 'src/views/journal';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/journal" component={Journal} />
        <Route path="/home" component={Home} />
        <Redirect from="/" to="/home" />
      </Switch>
    );
  }
}

export default Routes;
