import { Datagrid, List, TextField } from 'react-admin';

export const PatrimoineList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="nom" label="Nom" />
      </Datagrid>
    </List>
  );
};
