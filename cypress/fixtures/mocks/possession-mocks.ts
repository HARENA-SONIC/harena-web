import {
  Argent,
  GetPatrimoinePossessions200Response,
  Materiel,
} from '@harena-com/typescript-client';

const ordinateur: Materiel = {
  nom: 'Mon materiel',
  devise: {
    code: 'MGA',
    nom: 'Ariary',
  },
  t: '2024-07-15T00:00:00Z',
  valeur_comptable: 100,
  date_d_acquisition: '2024-07-15T00:00:00Z',
  taux_dappreciation_annuel: 50,
};

const monArgentDette: Argent = {
  type: 'DETTE',
  nom: 'Mon Argent Dette',
  valeur_comptable: 100,
  t: '2024-07-15T00:00:00Z',
  devise: {
    code: 'MGA',
    nom: 'Ariary',
  },
  date_d_ouverture: '2024-07-15T00:00:00Z',
};

export const possessionMocks: Required<GetPatrimoinePossessions200Response> = {
  data: [
    {
      type: 'ARGENT',
      argent: monArgentDette,
    },
    {
      type: 'ARGENT',
      argent: {
        type: 'CREANCE',
        nom: 'Mon Argent Creance',
        valeur_comptable: 1500,
        t: '2024-07-15T00:00:00Z',
        devise: {
          code: 'EUR',
          nom: 'Euro',
        },
        date_d_ouverture: '2024-07-15T00:00:00Z',
      },
    },
    {
      type: 'MATERIEL',
      materiel: ordinateur,
    },
    {
      type: 'ARGENT',
      argent: monArgentDette,
    },
    {
      type: 'FLUXARGENT',
      flux_argent: {
        argent: monArgentDette,
        valeur_comptable: 500,
        nom: 'Mon Argent Creance',
        t: '2024-07-15T00:00:00Z',
        fin: '2024-07-15T00:00:00Z',
        debut: '2024-07-18T00:00:00Z',
        flux_mensuel: 500,
        date_d_operation: 21,
        devise: {
          code: 'EUR',
          nom: 'Euro',
        },
      },
    },
  ],
};
