import {
  CreateButton,
  Datagrid,
  DateField,
  FunctionField,
  List,
  TextField,
  TopToolbar,
} from 'react-admin';
import { renderMoney } from '../common/utils/typo';

export const PatrimoineListActions = () => {
  return (
    <TopToolbar>
      <CreateButton />
    </TopToolbar>
  );
};

export const PatrimoineList = () => {
  return (
    <List actions={<PatrimoineListActions />}>
      <Datagrid bulkActionButtons={false}>
        <TextField source="nom" label="Nom" />
        <DateField source="t" label="Date T" />
        <TextField source="possesseur.nom" label="Possesseur" />
        <FunctionField
          render={(patrimoine) => renderMoney(patrimoine.valeur_comptable)}
          label="Valeur Comptable"
        />
      </Datagrid>
    </List>
  );
};
