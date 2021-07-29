import { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Layout from '@/layout';
import Login from '@/Login';
import Home from '@/views/home';
import Journal from '@/views/journal';

class index extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Redirect exact from="/" to="/home" />
          <Route path="/">
            <Layout>
              <Route path="/home" component={Home} />
              <Route path="/journal" component={Journal} />
            </Layout>
          </Route>
        </Switch>
      </HashRouter>
    );
  }
}

export default index;
