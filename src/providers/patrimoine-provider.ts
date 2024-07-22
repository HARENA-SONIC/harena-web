import { Patrimoine } from '@harena-com/typescript-client';
import { HarenaDataProvider } from './types';
import { patrimoineApi } from './api';
import { addIdField } from './utils';

export const patrimoineProvider: HarenaDataProvider<Patrimoine> = {
  getOne: async (nom) => {
    return patrimoineApi()
      .getPatrimoineByNom(nom)
      .then((response) => addIdField(response.data, 'nom'));
  },
  getList: async (page, pageSize) => {
    return patrimoineApi()
      .getPatrimoines(page, pageSize)
      .then((response) =>
        response.data.data!.map((patrimoine) => addIdField(patrimoine, 'nom'))
      );
  },
  saveOrUpdate: async (payload) => {
    return patrimoineApi()
      .crupdatePatrimoines({ data: [payload] })
      .then((response) => addIdField(response.data.data![0], 'nom'));
  },
  delete: () => {
    throw new Error('Not Implemented');
  },
};
