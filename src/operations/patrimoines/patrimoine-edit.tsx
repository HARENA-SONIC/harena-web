import { DateInput, Edit, SimpleForm, TextInput } from 'react-admin';
import { useParams } from 'react-router-dom';
import { required } from '@/operations/common/input-validator';

export const PatrimoineEdit = () => {
  const { id } = useParams();

  return (
    <Edit patrimoine="patrimoines" id={id}>
      <SimpleForm>
        <TextInput
          inputProps={{ 'data-testid': 'nom-input' }}
          fullWidth
          source="nom"
          label="Nom"
          validate={required()}
        />
        <DateInput
          inputProps={{ 'data-testid': 't-input' }}
          fullWidth
          source="t"
          label="Date T"
          validate={required()}
        />
        <TextInput
          fullWidth
          source="possesseur.nom"
          inputProps={{ 'data-testid': 'possesseur-input' }}
          label="Possesseur"
          validate={required()}
        />
      </SimpleForm>
    </Edit>
  );
};
