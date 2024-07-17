import { AuthProvider } from 'react-admin';

//TODO: implementation
export const authProvider: AuthProvider = {
  login: async () => {},
  checkAuth: async () => {},
  logout: async () => {
    localStorage.clear();
    sessionStorage.clear();
  },
  checkError: () => Promise.resolve(/* ... */),
  // getIdentity: () => Promise.resolve(/* ... */),
  handleCallback: () => Promise.resolve(/* ... */), // for third-party authentication only
  getPermissions: () => Promise.resolve(/* ... */),
};
