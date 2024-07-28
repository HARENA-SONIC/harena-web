import {
  DateField,
  EditButton,
  FunctionField,
  Show,
  SimpleShowLayout,
  TabbedShowLayout,
  TextField,
  TopToolbar,
} from 'react-admin';
import { PossessionList } from '../posssessions/possession-list';
import { useParams } from 'react-router-dom';
import { renderMoney } from '../common/utils/typo';

const PatrimoineShowActions = () => {
  return (
    <TopToolbar>
      <EditButton data-testid="edit-button" />
    </TopToolbar>
  );
};

export const PatrimoineShow = () => {
  const { id } = useParams();

  return (
    <Show resource="patrimoines" id={id} actions={<PatrimoineShowActions />}>
      <SimpleShowLayout>
        <TextField source="nom" label="Nom" />
        <DateField source="t" label="Date T" />
        <TextField source="possesseur.nom" label="Possesseur" />
        <FunctionField
          render={(patrimoine) => renderMoney(patrimoine.valeur_comptable)}
          label="Valeur Comptable"
        />
      </SimpleShowLayout>
      <TabbedShowLayout>
        <TabbedShowLayout.Tab label="Posssession" path="">
          <PossessionList patrimoineNom={id!} />
        </TabbedShowLayout.Tab>
      </TabbedShowLayout>
    </Show>
  );
};
