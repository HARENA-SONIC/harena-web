import { projectionFutureApi } from './api';
import { HarenaDataProvider } from './types';
import { FluxImpossibles } from '@harena-com/typescript-client';
import { addIdField } from './utils';

export const fluxImppossibleProvider: HarenaDataProvider<FluxImpossibles> = {
  getList: async (
    _page,
    _pageSize,
    {
      debut = new Date().toISOString(),
      fin = new Date('2024-07-30').toISOString(),
    },
    {},
    { patrimoineNom }
  ) => {
    return projectionFutureApi()
      .getPatrimoineFluxImpossibles(patrimoineNom, debut, fin)
      .then((response) => response.data.data!)
      .then((els) => els.map((el) => addIdField(el, 'nom_argent')));
  },
  getOne: () => {
    throw new Error('Not Implemented');
  },
  saveOrUpdate: () => {
    throw new Error('Not Implemented');
  },
  delete: () => {
    throw new Error('Not Implemented');
  },
};
