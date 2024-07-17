import { useTheme } from 'react-admin';

export const useIsDarkTheme = () => {
  const [theme] = useTheme();
  return theme === 'dark';
};
