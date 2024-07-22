import { Show, SimpleShowLayout, TextField } from 'react-admin';
import { useParams } from 'react-router-dom';

export const PatrimoineShow = () => {
  const { id } = useParams();

  return (
    <Show id={id}>
      <SimpleShowLayout>
        <TextField source="nom" label="Nom" />
      </SimpleShowLayout>
    </Show>
  );
};
