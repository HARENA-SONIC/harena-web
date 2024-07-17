import { FC } from 'react';
import { Box, BoxProps } from '@mui/material';

export const FlexBox: FC<BoxProps> = ({ sx = {}, ...boxProps }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...sx,
      }}
      {...boxProps}
    />
  );
};
