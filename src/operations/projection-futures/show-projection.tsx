import { useParams } from 'react-router-dom';
import {
  Datagrid,
  DateInput,
  List,
  TextField,
  useListContext,
} from 'react-admin';
import { Box } from '@mui/material';
import { FlexBox } from '../common/components/box';
import { useEffect, useState } from 'react';
import { projectionFutureApi } from '@/providers/api';

export const FluxDargentList = () => {
  const { id } = useParams();

  return (
    <List
      title=""
      resource="fluxImpossibles"
      queryOptions={{
        meta: { patrimoineNom: id },
      }}
      filters={[
        <DateInput source="debut" label="Debut" alwaysOn />,
        <DateInput source="fin" label="Fin" alwaysOn />,
      ]}
      filterDefaultValues={{
        fin: new Date('2024-07-30').toISOString(),
        debut: new Date().toISOString(),
      }}
      exporter={false}
    >
      <FlexBox>
        <Datagrid bulkActionButtons={false}>
          <FlexBox sx={{ width: '100%' }}>
            <Graphe />
            <Box sx={{ flex: 1 }}>
              <TextField source="nom" label="Nom" />
            </Box>
          </FlexBox>
        </Datagrid>
      </FlexBox>
    </List>
  );
};

export const Graphe = () => {
  const { id } = useParams();
  const { filterValues } = useListContext();
  const [state, setState] = useState<any>([]);

  useEffect(() => {
    const test = async () => {
      const defaultDebut = new Date().toISOString();
      const defaultFin = new Date('2025-07-30').toISOString();

      const graphe = await projectionFutureApi()
        .getPatrimoineGraph(
          id!,
          (filterValues.debut = defaultDebut),
          (filterValues.fin = defaultFin)
        )
        .then((response) => response.data);
      setState(URL.createObjectURL(new Blob([graphe as any])));
    };
    test();
  }, [id]);

  return (
    <img
      src={state as string}
      width="400px"
      style={{ display: 'block' }}
      height="300px"
    />
  );
};
