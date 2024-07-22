import { Edit, SimpleForm, TextInput } from 'react-admin';
import { useParams } from 'react-router-dom';
import { required } from '@/operations/common/input-validator';

export const PatrimoineEdit = () => {
  const { id } = useParams();

  return (
    <Edit id={id}>
      <SimpleForm>
        <TextInput source="nom" label="Nom" validate={required()} />
      </SimpleForm>
    </Edit>
  );
};
