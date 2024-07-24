import {
    DateField,
    EditButton,
    FunctionField,
    Show,
    SimpleShowLayout,
    TextField,
    TopToolbar,
  } from 'react-admin';
  import { useParams } from 'react-router-dom';
  import { renderMoney } from '../common/utils/typo';
  
  const PossessionShowActions = () => {
    return (
      <TopToolbar>
        <EditButton />
      </TopToolbar>
    );
  };
  
  export const PossessionShow = () => {
    const { id } = useParams();
  
    return (
      <Show id={id} actions={<PossessionShowActions />}>
        <SimpleShowLayout>
          <TextField source="nom" label="Nom" />
          <DateField source="t" label="Date T" />
          <TextField source="patrimoine.nom" label="Patrimoine" />
          <FunctionField
            render={(possession) => renderMoney(possession.valeur_comptable)}
            label="Valeur Comptable"
          />
        </SimpleShowLayout>
      </Show>
    );
  };
  