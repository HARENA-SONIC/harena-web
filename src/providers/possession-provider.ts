import {
  Possession,
  PossessionAvecType,
  PossessionAvecTypeTypeEnum,
} from '@harena-com/typescript-client';
import { HarenaDataProvider } from './types';
import { possessionApi } from './api';
import { addIdField } from './utils';

export const getPossessionTypeValue = (value: PossessionAvecType) => {
  switch (value.type) {
    case 'ARGENT':
      return { ...value.argent!, type: PossessionAvecTypeTypeEnum.ARGENT };
    case 'FLUXARGENT':
      return { ...value.argent!, type: PossessionAvecTypeTypeEnum.FLUXARGENT };
    case 'MATERIEL':
      return { ...value.argent!, tyep: PossessionAvecTypeTypeEnum.MATERIEL };
    default:
      throw new Error('Unknown PossessionAvecType value');
  }
};

export const addPossessionId = (possession: PossessionAvecType) => {
  return addIdField(getPossessionTypeValue(possession), 'nom');
};

export const possessionProvider: HarenaDataProvider<Possession> = {
  getOne: async (possessionNom, { patrimoineNom }) => {
    return possessionApi()
      .getPatrimoinePossessionByNom(possessionNom, patrimoineNom)
      .then((response) => addPossessionId(response.data));
  },
  getList: async (page, pageSize, _filter, _sort, { patrimoineNom }) => {
    return possessionApi()
      .getPatrimoinePossessions(patrimoineNom, page, pageSize)
      .then((response) =>
        response.data.data!.map((possession) => addPossessionId(possession))
      );
  },
  saveOrUpdate: async (payload, { patrimoineNom }) => {
    return possessionApi()
      .crupdatePatrimoinePossessions(patrimoineNom, 0, 0, {
        data: [payload as any],
      })
      .then((response) => addPossessionId(response.data.data![0]));
  },
  delete: () => {
    throw new Error('Not Implemented');
  },
};
