import { PatrimoineApi } from '@harena-com/typescript-client';
import { getConfiguration } from './utils';

export const patrimoineApi = () => new PatrimoineApi(getConfiguration());
