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
import { PossessionCreate } from './possession-create';
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
        label="Create"
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
        empty={false}
        resource="possessions"
        actions={
          <PossessionListActions toggleCreateDialog={toggleCreateDialog} />
        }
        queryOptions={{ meta: { patrimoineNom } }}
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
            render={(possession) => renderMoney(possession.valeur_comptable)}
            label="Valeur Comptable"
          />
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
