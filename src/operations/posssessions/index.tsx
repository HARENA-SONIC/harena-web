import { PossessionList } from './possession-list';
import { PossessionShow } from './possession-show';
import { PossessionEdit } from './possession-edit';
import { UI } from '../common/utils/types';

export const POSSESSION_UI: UI = {
  list: PossessionList,
  show: PossessionShow,
  edit: PossessionEdit,
  recordRepresentation: 'nom',
};
