import { Create, SimpleForm, TextInput } from 'react-admin';
import { useParams } from 'react-router-dom';
import { required } from '@/operations/common/input-validator';

export const PatrimoineCreate = () => {
  const { id } = useParams();

  return (
    <Create id={id}>
      <SimpleForm>
        <TextInput source="nom" label="Nom" validate={required()} />
      </SimpleForm>
    </Create>
  );
};
