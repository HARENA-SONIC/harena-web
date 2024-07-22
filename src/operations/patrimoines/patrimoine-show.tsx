import {
  EditButton,
  Show,
  SimpleShowLayout,
  TextField,
  TopToolbar,
} from 'react-admin';
import { useParams } from 'react-router-dom';

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
      </SimpleShowLayout>
    </Show>
  );
};
