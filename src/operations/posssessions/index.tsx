import { PossessionList } from './possession-list';
import { PossessionShow } from './possession-show';
import { UI } from '../common/utils/types';
import { PossessionEdit } from './possession-edit';

export const POSSESSION_UI: UI = {
  list: PossessionList,
  show: PossessionShow,
  edit: PossessionEdit,
  recordRepresentation: 'nom',
};
