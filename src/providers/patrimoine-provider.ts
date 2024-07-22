import { Patrimoine } from '@harena-com/typescript-client';
import { HarenaDataProvider } from './types';
import { patrimoineApi } from './api';

export const patrimoineProvider: HarenaDataProvider<Patrimoine> = {
  getOne: async (nom) => {
    return patrimoineApi()
      .getPatrimoineByNom(nom)
      .then((response) => response.data);
  },
  getList: async (page, pageSize) => {
    return patrimoineApi()
      .getPatrimoines(page, pageSize)
      .then((response) => response.data.data!);
  },
  saveOrUpdate: async (payload) => {
    return patrimoineApi()
      .crupdatePatrimoines({ data: [payload] })
      .then((response) => response.data.data![0]);
  },
  delete: () => {
    throw new Error('Not Implemented');
  },
};
