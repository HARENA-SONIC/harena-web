import { Configuration } from '@harena-com/typescript-client';

export const addIdField = <T>(data: T, key: keyof T) => {
  return { ...data, id: data[key] };
};

export const BASE_PATH = process.env.REACT_APP_HARENA_COM_API!;

export const getConfiguration = () => {
  const newConfig = new Configuration();
  newConfig.basePath = BASE_PATH;
  return newConfig;
};
