import { PossessionAvecTypeTypeEnum } from '@harena-com/typescript-client';
import { Chip } from '@mui/material';
import { FunctionField } from 'react-admin';

export const getPossessionFieldColor = (
  possessionType: PossessionAvecTypeTypeEnum
) => {
  switch (possessionType) {
    case 'ARGENT':
      return 'success';
    case 'FLUXARGENT':
      return 'error';
    default:
      return 'primary';
  }
};

export const PossessionTypeField = () => (
  <FunctionField
    label="Type"
    render={(possession) => (
      <Chip
        label={possession.type}
        color={getPossessionFieldColor(possession.type)}
      />
    )}
  />
);
