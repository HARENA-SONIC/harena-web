import { PatrimoineList } from './patrimoine-list';
import { PatrimoineShow } from './patrimoine-show';
import { PatrimoineCreate } from './patrimoine-create';
import { UI } from '../common/utils/types';
import { PatrimoineEdit } from './patrimoine-edit';

export const PATRIMOINE_UI: UI = {
  list: PatrimoineList,
  show: PatrimoineShow,
  create: PatrimoineCreate,
  edit: PatrimoineEdit,
  recordRepresentation: "nom"
};
