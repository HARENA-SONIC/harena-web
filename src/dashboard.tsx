import { Admin, CustomRoutes, Resource } from 'react-admin';
import { Route } from 'react-router-dom';
import { PossessionEdit, PossessionShow } from './operations/posssessions';
import { Layout } from './layout';
import { darkTheme, lightTheme } from './assets/theme';
import { authProvider } from './providers/auth-provider';
import { dataProvider } from './providers';
import { PATRIMOINE_UI } from './operations/patrimoines';

const Dashboard = () => (
  <Admin
    requireAuth
    title="Harena"
    defaultTheme="dark"
    layout={Layout}
    lightTheme={lightTheme}
    darkTheme={darkTheme}
    authProvider={authProvider}
    dataProvider={dataProvider}
  >
    <Resource name="patrimoines" {...PATRIMOINE_UI} />
    <Resource name="possessions" />
    <Resource name="fluxImpossibles" />
    <CustomRoutes>
      <Route
        path="/patrimoines/:patrimoineNom/possessions/:possessionNom/show"
        element={<PossessionShow />}
      />
      <Route
        path="/patrimoines/:patrimoineNom/possessions/:possessionNom/edit"
        element={<PossessionEdit />}
      />
    </CustomRoutes>
  </Admin>
);

export default Dashboard;
