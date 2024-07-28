import {
  DateField,
  EditButton,
  Show,
  SimpleShowLayout,
  TabbedShowLayout,
  TextField,
  TopToolbar,
} from 'react-admin';
import { PossessionList } from '../posssessions/possession-list';
import { useParams } from 'react-router-dom';

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
        <TextField source="valeur_comptable" label="Valeur Comptable" />
      </SimpleShowLayout>
      <TabbedShowLayout>
        <TabbedShowLayout.Tab
          data-testid="patrimoine-possession-list"
          label="Posssession"
          path=""
        >
          <PossessionList patrimoineNom={id!} />
        </TabbedShowLayout.Tab>
      </TabbedShowLayout>
    </Show>
  );
};
