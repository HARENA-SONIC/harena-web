import { FC } from 'react';
import { Create, DateInput, SimpleForm, TextInput } from 'react-admin';
import { required } from '../common/input-validator';

export const PossessionCreate: FC<{ patrimoineNom: string }> = ({
  patrimoineNom,
}) => {
  return (
    <Create
      resource="possessions"
      title=""
      mutationOptions={{ meta: { patrimoineNom } }}
    >
      <SimpleForm>
        <TextInput fullWidth source="nom" label="Nom" validate={required()} />
        <DateInput fullWidth source="t" label="Date T" validate={required()} />
        <TextInput
          fullWidth
          source="patrimoine.nom"
          label="Patrimoine"
          validate={required()}
        />
      </SimpleForm>
    </Create>
  );
};
