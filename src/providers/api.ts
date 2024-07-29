import {
  PatrimoineApi,
  PossessionApi,
  ProjectionFutureApi,
} from '@harena-com/typescript-client';
import { getConfiguration } from './utils';

export const patrimoineApi = () => new PatrimoineApi(getConfiguration());
export const possessionApi = () => new PossessionApi(getConfiguration());
export const projectionFutureApi = () =>
  new ProjectionFutureApi(getConfiguration());
