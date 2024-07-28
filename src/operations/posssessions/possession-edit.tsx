import {
  Button,
  DateInput,
  Edit,
  SimpleForm,
  TextInput,
  TopToolbar,
  useRedirect,
} from 'react-admin';
import { RemoveRedEye } from '@mui/icons-material';
import { useParams } from 'react-router-dom';
import { required } from '@/operations/common/input-validator';

export const PossessionEdit = () => {
  const { patrimoineNom, possessionNom } = useParams();
  const redirect = useRedirect();

  const goToShow = () => {
    redirect(`/patrimoines/${patrimoineNom}/possessions/${possessionNom}/show`);
  };

  return (
    <Edit
      id={possessionNom}
      resource="possessions"
      queryOptions={{ meta: { patrimoineNom } }}
      actions={
        <TopToolbar>
          <Button
            startIcon={<RemoveRedEye />}
            size="medium"
            onClick={goToShow}
            label="Show"
          />
        </TopToolbar>
      }
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
    </Edit>
  );
};
