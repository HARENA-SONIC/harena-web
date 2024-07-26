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

const PatrimoineShowActions = () => {
  return (
    <TopToolbar>
      <EditButton />
    </TopToolbar>
  );
};

export const PatrimoineShow = () => {
  const { id } = useParams();

  return (
    <Show id={id} actions={<PatrimoineShowActions />}>
      <SimpleShowLayout>
        <TextField source="nom" label="Nom" />
        <DateField source="t" label="Date T" />
        <TextField source="possesseur.nom" label="Possesseur" />
        <FunctionField
          render={(patrimoine) => renderMoney(patrimoine.valeur_comptable)}
          label="Valeur Comptable"
        />
      </SimpleShowLayout>
    </Show>
  );
};
