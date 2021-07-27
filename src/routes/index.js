import { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Layout from 'src/layout';
import Login from 'src/Login';
import Home from 'src/views/home';
import Journal from 'src/views/journal';
const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    routes: [
      {
        path: '/home',
        component: Home
      },
      {
        path: '/journal',
        component: Journal
      }
    ]
  }
];

function RouteWithSubRoutes(route) {
  console.log('route', route.path);
  return (
    <div>
      {route.redirect && <Redirect from={route.path} to={route.redirect} />}
      <Route path={route.path}>
        {
          <route.component>
            {route.routes && route.routes.map((r) => <RouteWithSubRoutes {...r} key={r.path} />)}
          </route.component>
        }
      </Route>
    </div>
  );
}

class index extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          {routes.map((route) => {
            return <RouteWithSubRoutes {...route} key={route.path} />;
          })}
        </Switch>
      </HashRouter>
    );
  }
}

export default index;
