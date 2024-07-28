import {
  GetPatrimoines200Response,
  Patrimoine,
} from '@harena-com/typescript-client';
import { personneMocks } from './person-mocks';

export const patrimoineMocks: Patrimoine[] = [
  {
    nom: 'tre',
    possesseur: personneMocks[0],
    t: '2024-07-15T00:00:00Z',
    valeur_comptable: 5_000,
  },
  {
    nom: 'rtyui',
    possesseur: personneMocks[1],
    t: '2024-07-15T00:00:00Z',
    valeur_comptable: 5_000,
  },
  {
    nom: 'ZetyPatrimoine',
    possesseur: personneMocks[2],
    t: '2024-07-15T00:00:00Z',
    valeur_comptable: 5_000,
  },
];

export const getPatrimoineResponses: GetPatrimoines200Response = {
  data: patrimoineMocks,
};
