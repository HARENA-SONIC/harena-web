import {
  Button,
  DateField,
  FunctionField,
  Show,
  SimpleShowLayout,
  TextField,
  TopToolbar,
} from 'react-admin';
import { Create as EditIcon } from '@mui/icons-material';
import { useParams } from 'react-router-dom';
import { renderMoney } from '../common/utils/typo';

const PossessionShowActions = () => {
  const { patrimoineNom, possessionNom } = useParams();
  return (
    <TopToolbar>
      <Button
        href={`/#/patrimoines/${patrimoineNom}/possessions/${possessionNom}/edit`}
        startIcon={<EditIcon />}
        label="Edit"
        variant="contained"
        size="medium"
      />
    </TopToolbar>
  );
};

export const PossessionShow = () => {
  const { patrimoineNom, possessionNom } = useParams();

  return (
    <Show
      id={possessionNom}
      resource="possessions"
      queryOptions={{ meta: { patrimoineNom } }}
      actions={<PossessionShowActions />}
    >
      <SimpleShowLayout>
        <TextField source="nom" label="Nom" />
        <DateField source="t" label="Date T" />
        <TextField source="patrimoine.nom" label="Patrimoine" />
        <FunctionField
          render={(possession) => renderMoney(possession.valeur_comptable)}
          label="Valeur Comptable"
        />
      </SimpleShowLayout>
    </Show>
  );
};
