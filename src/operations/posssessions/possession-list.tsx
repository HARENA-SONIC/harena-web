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
  
  export const PossessionListActions = () => {
    return (
      <TopToolbar>
        <CreateButton />
      </TopToolbar>
    );
  };
  
  export const PossessionList = () => {
    return (
      <List actions={<PossessionListActions />}>
        <Datagrid bulkActionButtons={false}>
          <TextField source="nom" label="Nom" />
          <DateField source="t" label="Date T" />
          <TextField source="patrimoine.nom" label="Patrimoine" />
          <FunctionField
            render={(possession) => renderMoney(possession.valeur_comptable)}
            label="Valeur Comptable"
          />
        </Datagrid>
      </List>
    );
  };