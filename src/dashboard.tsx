import { Admin, Resource } from 'react-admin';
import { Layout } from './layout';
import { harenaDarkTheme, harenaLightTheme } from './harena-theme';
import { authProvider } from './providers/auth-provider';
import { dataProvider } from './providers';
import { DUMMY_UI } from './operations/dummies';
import { PATRIMOINE_UI } from './operations/patrimoines';

const Dashboard = () => (
  <Admin
    requireAuth
    title="Harena"
    defaultTheme="dark"
    layout={Layout}
    lightTheme={harenaLightTheme}
    darkTheme={harenaDarkTheme}
    authProvider={authProvider}
    dataProvider={dataProvider}
  >
    <Resource name="dummies" {...DUMMY_UI} />
    <Resource name="patrimoines" {...PATRIMOINE_UI} />
  </Admin>
);

export default Dashboard;
