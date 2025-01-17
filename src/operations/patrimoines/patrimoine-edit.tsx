import {
  DateInput,
  Edit,
  ShowButton,
  SimpleForm,
  TextInput,
  TopToolbar,
} from 'react-admin';
import { useParams } from 'react-router-dom';
import { required } from '@/operations/common/input-validator';

export const PatrimoineEdit = () => {
  const { id } = useParams();

  return (
    <Edit
      actions={
        <TopToolbar>
          <ShowButton />
        </TopToolbar>
      }
      patrimoine="patrimoines"
      id={id}
    >
      <SimpleForm>
        <TextInput
          fullWidth
          readOnly
          data-testid="nom-input"
          source="nom"
          label="Nom"
          validate={required()}
        />
        <DateInput
          data-testid="t-input"
          fullWidth
          source="t"
          label="Date T"
          validate={required()}
        />
        <TextInput
          fullWidth
          source="possesseur.nom"
          data-testid="possesseur-input"
          label="Possesseur"
          validate={required()}
        />
      </SimpleForm>
    </Edit>
  );
};
