import { DateInput, Edit, SimpleForm, TextInput } from 'react-admin';
import { useParams } from 'react-router-dom';
import { required } from '@/operations/common/input-validator';

export const PatrimoineEdit = () => {
  const { id } = useParams();

  return (
    <Edit id={id}>
      <SimpleForm>
        <TextInput fullWidth source="nom" label="Nom" validate={required()} />
        <DateInput fullWidth source="t" label="Date T" validate={required()} />
        <TextInput
          fullWidth
          source="possesseur.nom"
          label="Possesseur"
          validate={required()}
        />
      </SimpleForm>
    </Edit>
  );
};
