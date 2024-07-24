import { Possession } from '@harena-com/typescript-client';
import { HarenaDataProvider } from './types';
import { possessionApi } from './api';
import { addIdField } from './utils';

export const possessionProvider: HarenaDataProvider<Possession> = {
  getOne: async (nom) => {
    return possessionApi()
      .getPossessionByNom(nom)
      .then((response) => addIdField(response.data, 'nom'));
  },
  getList: async (page, pageSize) => {
    return possessionApi()
      .getPossessions(page, pageSize)
      .then((response) =>
        response.data.data!.map((possession) => addIdField(possession, 'nom'))
      );
  },
  saveOrUpdate: async (payload) => {
    return possessionApi()
      .crupdatePossessions({ data: [payload] })
      .then((response) => addIdField(response.data.data![0], 'nom'));
  },
  delete: () => {
    throw new Error('Not Implemented');
  },
};