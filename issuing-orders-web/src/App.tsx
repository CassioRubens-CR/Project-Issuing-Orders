import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { routes } from './Config';
import RouteItem from './model/RouteItemModel';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          {routes.map((route: RouteItem) => (
            <Route
              key={`${route.key}`}
              path={`${route.path}`}
              component={route.component}
              exact
            />
          ))}
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
