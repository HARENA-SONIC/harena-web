import {
  Button,
  Datagrid,
  DateField,
  FunctionField,
  List,
  TextField,
  TopToolbar,
  useRedirect,
} from 'react-admin';
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
} from '@mui/material';
import { Add as CreateIcon } from '@mui/icons-material';
import { Possession } from '@harena-com/typescript-client';
import { PossessionCreate } from './possession-create';
import { PossessionTypeField } from './components';
import { renderMoney } from '../common/utils/typo';
import { useToggle } from '../common/hooks';

export const PossessionListActions = ({
  toggleCreateDialog,
}: {
  toggleCreateDialog: () => void;
}) => {
  return (
    <TopToolbar>
      <Button
        startIcon={<CreateIcon />}
        label="Add new Possession"
        onClick={toggleCreateDialog}
      />
    </TopToolbar>
  );
};

export const PossessionList = ({
  patrimoineNom,
}: {
  patrimoineNom: string;
}) => {
  const { value: showCreateDialog, toggleValue: toggleCreateDialog } =
    useToggle();
  const redirect = useRedirect();

  return (
    <>
      <List
        title=""
        resource="possessions"
        queryOptions={{ meta: { patrimoineNom } }}
        actions={
          <PossessionListActions toggleCreateDialog={toggleCreateDialog} />
        }
      >
        <Datagrid
          bulkActionButtons={false}
          rowClick={(possessionNom) => {
            redirect(
              `/patrimoines/${patrimoineNom}/possessions/${possessionNom}/show`
            );
            return false;
          }}
        >
          <TextField source="nom" label="Nom" />
          <DateField source="t" label="Date T" />
          <FunctionField
            label="Valeur Comptable"
            render={(possession: Possession) =>
              renderMoney(possession.valeur_comptable!, possession.devise!)
            }
          />
          <PossessionTypeField />
        </Datagrid>
      </List>
      <Dialog
        fullWidth
        maxWidth="sm"
        open={showCreateDialog}
        onClose={toggleCreateDialog}
      >
        <DialogTitle>Add new Possession</DialogTitle>
        <DialogContent>
          <PossessionCreate patrimoineNom={patrimoineNom} />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={toggleCreateDialog}
            label="Cancel"
            variant="contained"
            size="medium"
            color="error"
          />
        </DialogActions>
      </Dialog>
    </>
  );
};
