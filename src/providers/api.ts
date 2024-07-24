import { PatrimoineApi } from '@harena-com/typescript-client';
import { PossessionApi } from '@harena-com/typescript-client';
import { getConfiguration } from './utils';

export const patrimoineApi = () => new PatrimoineApi(getConfiguration());
export const possessionApi = () => new PossessionApi(getConfiguration());
