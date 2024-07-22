import {
  CreateButton,
  Datagrid,
  DateField,
  List,
  TextField,
  TopToolbar,
} from 'react-admin';

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
      </Datagrid>
    </List>
  );
};
