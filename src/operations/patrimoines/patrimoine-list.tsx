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
      <CreateButton data-testid="create-button" />
    </TopToolbar>
  );
};

export const PatrimoineList = () => {
  return (
    <List resource="patrimoines" actions={<PatrimoineListActions />}>
      <Datagrid bulkActionButtons={false}>
        <TextField source="nom" label="Nom" />
        <DateField source="t" label="Date T" />
        <TextField source="possesseur.nom" label="Possesseur" />
        <TextField source="valeur_comptable" label="Valeur Comptable" />
      </Datagrid>
    </List>
  );
};
