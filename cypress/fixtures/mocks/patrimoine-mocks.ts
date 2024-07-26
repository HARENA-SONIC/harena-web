import { Patrimoine } from '@harena-com/typescript-client';
import { personneMocks } from './possesseur-mocks';

export const patrimoineMocks: Patrimoine[] = [
  {
    nom: 'tre',
    possesseur: personneMocks[0],
    t: '2024-07-15T00:00:00Z',
    valeur_comptable: 5_000,
  },
  {
    nom: 'rtyui',
    possesseur: personneMocks[0],
    t: '2024-07-15T00:00:00Z',
    valeur_comptable: 5_000,
  },
  {
    nom: 'ZetyPatrimoine',
    possesseur: personneMocks[0],
    t: '2024-07-15T00:00:00Z',
    valeur_comptable: 5_000,
  },
];
