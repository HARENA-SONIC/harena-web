import { Create, DateInput, SimpleForm, TextInput } from 'react-admin';
import { Patrimoine } from '@harena-com/typescript-client';
import { useParams } from 'react-router-dom';
import { required } from '@/operations/common/input-validator';

export const PatrimoineCreate = () => {
  const { id } = useParams();

  return (
    <Create
      id={id}
      transform={(patrimoine: Partial<Patrimoine>): Patrimoine => ({
        ...patrimoine,
        valeur_comptable: 0,
      })}
    >
      <SimpleForm>
        <TextInput
          data-testid="nom-input"
          fullWidth
          source="nom"
          label="Nom"
          validate={required()}
        />
        <DateInput
          fullWidth
          data-testid="t-input"
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
    </Create>
  );
};
