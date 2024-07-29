import { possessionProvider } from '@/providers';
import { FC, ReactNode } from 'react';
import {
  Create,
  DateInput,
  FunctionField,
  number,
  SelectInput,
  SimpleForm,
  TextInput,
  useGetList,
} from 'react-admin';
import { Argent, Possession } from '@harena-com/typescript-client';
import { useWatch } from 'react-hook-form';
import { required } from '../common/input-validator';

export type DeviseType = 'MGA' | 'EUR' | 'CAD';
export const DEVICES_CHOICES: { label: string; code: DeviseType }[] = [
  {
    code: 'MGA',
    label: 'Ariary',
  },
  {
    code: 'EUR',
    label: 'Euro',
  },
  {
    code: 'CAD',
    label: 'Dollar Canadien',
  },
];
export type ArgentType = 'DETTE' | 'CREANCE' | 'AUTRES';

export const getDeviseValue = (code: DeviseType) => {
  return DEVICES_CHOICES.find((el) => el.code === code)!;
};

export const ARGENTS_TYPES = [
  {
    label: 'Creance',
    value: 'CREANCE',
  },
  {
    label: 'Dette',
    value: 'DETTE',
  },
  {
    label: 'Autres',
    value: 'AUTRES',
  },
];

export const ArgentTypeInputs = ({ source }: { source: string }) => {
  return (
    <SelectInput
      fullWidth
      validate={required()}
      label="Argent Type"
      source={source}
      choices={ARGENTS_TYPES}
      optionText="label"
      optionValue="value"
    />
  );
};

export const PossessionTypeInputs = () => {
  return (
    <SelectInput
      fullWidth
      validate={required()}
      label="Possession Type"
      source={'typeEx'}
      optionText="label"
      optionValue="value"
      choices={[
        {
          label: 'Argent',
          value: 'ARGENT',
        },
        {
          label: "Flux D'argent",
          value: 'FLUX_ARGENT',
        },
        {
          label: 'Materiel',
          value: 'MATERIEL',
        },
      ]}
    />
  );
};

export const DeviseInputs = ({ source }: { source: string }) => {
  return (
    <SelectInput
      fullWidth
      validate={required()}
      label="Devise"
      source={source}
      choices={DEVICES_CHOICES}
      optionText="label"
      optionValue="code"
    />
  );
};

const getRightPossessionValue = async (
  possession: Record<string, unknown>,
  devise: { nom: string; code: string }
) => {
  const obj = {
    argent: {},
    materiel: {},
    flux_argent: {},
  };
  if (possession.typeEx === 'FLUX_ARGENT') {
    const possessions = await possessionProvider.getList(1, 500, {}, {}, {});
    const argent: Possession = possessions.filter(
      (v) => v.nom == possession['argent']
    )?.[0];
    obj['flux_argent'] = {
      devise,
      t: possession.t,
      nom: possession.nom,
      debut: possession.debut,
      fin: possession.fin,
      valeur_comptable: possession.valeur_comptable,
      flux_mensuel: possession.flux_mensuel,
      date_d_operation: possession.date_d_operation,
      argent,
    };
  } else {
    const field = possession.typeEx === 'ARGENT' ? 'argent' : 'materiel';
    obj[field] = {
      ...possession,
      devise,
    };
  }
  return obj;
};

export const PossessionCreate: FC<{ patrimoineNom: string }> = ({
  patrimoineNom,
}) => {
  return (
    <Create
      resource="possessions"
      title=""
      redirect={false}
      mutationOptions={{ meta: { patrimoineNom } }}
      transform={async (
        possession: Possession & { typeEx: string; devise: DeviseType }
      ) => {
        const devise = getDeviseValue(possession.devise);
        const possessionValue = await getRightPossessionValue(
          possession as unknown as Record<string, unknown>,
          {
            nom: devise.label,
            code: devise.code,
          }
        );
        return {
          type: possession.typeEx,
          ...possessionValue,
        };
      }}
    >
      <SimpleForm>
        <TextInput fullWidth source="nom" label="Nom" validate={required()} />
        <DateInput fullWidth source="t" label="Date T" validate={required()} />
        <TextInput
          fullWidth
          source="valeur_comptable"
          label="Valeur Comptable"
          validate={[required(), number()]}
        />
        <DeviseInputs source="devise" />
        <PossessionTypeInputs />
        <ShowInput shouldShow={(record) => record.typeEx === 'ARGENT'}>
          <ArgentTypeInputs source="type" />
          <DateInput
            source="date_d_ouvertue"
            label="Date d'ouverture"
            fullWidth
          />
        </ShowInput>
        <ShowInput shouldShow={(record) => record.typeEx === 'MATERIEL'}>
          <TextInput
            validate={[required(), number()]}
            source="taux_dappreciation_annuel"
            label="Taux d'appreciation annuel"
            fullWidth
          />
          <DateInput
            source="date_d_acquisition"
            label="Date d'acquisition"
            fullWidth
          />
        </ShowInput>
        <ShowInput shouldShow={(record) => record.typeEx === 'FLUX_ARGENT'}>
          <DateInput source="debut" label="Debut" fullWidth />
          <DateInput source="fin" label="Fin" fullWidth />
          <TextInput
            source="flux_mensuel"
            validate={[required(), number()]}
            label="Flux mensuel"
            fullWidth
          />
          <TextInput
            source="date_d_operation"
            validate={[required(), number()]}
            label="Date d'operation"
            fullWidth
          />
          <ArgentInput />
        </ShowInput>
      </SimpleForm>
    </Create>
  );
};

export const ArgentInput = () => {
  const { data: possesssions = [], isLoading } = useGetList('possesssions', {
    pagination: {
      page: 1,
      perPage: 500,
    },
  });
  const CHOICES = possesssions
    .filter((el) => el.typeEx === 'ARGENT')
    .map((argent: Argent) => ({ label: argent.nom, value: argent.nom }));

  return (
    <SelectInput
      fullWidth
      isLoading={isLoading}
      choices={CHOICES}
      label="Argent"
      source="argent"
      optionText="label"
      optionValue="value"
      validate={required()}
    />
  );
};

export const ShowField = ({
  shouldShow,
  children,
}: {
  children: ReactNode;
  shouldShow: (record: any) => boolean;
}) => {
  return (
    <FunctionField
      source="source"
      render={(record) => {
        if (!shouldShow(record)) {
          return null;
        }
        {
          children;
        }
      }}
    />
  );
};

export const ShowInput = ({
  shouldShow,
  children,
}: {
  children: ReactNode;
  shouldShow: (record: any) => boolean;
}) => {
  const record = useWatch();
  if (!shouldShow(record)) {
    return;
  }

  return children;
};
