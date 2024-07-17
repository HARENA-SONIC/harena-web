import { Show, SimpleShowLayout, TextField } from 'react-admin';
import { useParams } from 'react-router-dom';

export const DummyShow = () => {
  const { id } = useParams();

  return (
    <Show id={id}>
      <SimpleShowLayout>
        <TextField source="id" label="Id" />
        <TextField source="name" label="Name" />
      </SimpleShowLayout>
    </Show>
  );
};
