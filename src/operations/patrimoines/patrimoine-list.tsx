import {
  CreateButton,
  Datagrid,
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
      <Datagrid>
        <TextField source="nom" label="Nom" />
      </Datagrid>
    </List>
  );
};
