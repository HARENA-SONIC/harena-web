import { DataProvider } from 'react-admin';
import { HarenaDataProvider } from './types';
import { patrimoineProvider } from './patrimoine-provider';
import { possessionProvider } from './possession-provider';

export const getProvider = (resource: string): HarenaDataProvider<any> => {
  switch (resource) {
    case 'patrimoines':
      return patrimoineProvider;
    case 'possessions':
      return possessionProvider;
    default:
      throw new Error('Unknown resource type');
  }
};

export const dataProvider: DataProvider = {
  create: async (resource, { meta, data: payload }) => {
    const response = await getProvider(resource).saveOrUpdate(payload, {
      ...meta,
      mutationType: 'CREATE',
    });
    return { data: response };
  },
  update: async (resource, { data: payload, meta }) => {
    const response = await getProvider(resource).saveOrUpdate(payload, {
      ...meta,
      mutationType: 'UPDATE',
    });
    return { data: response };
  },
  getList: async (resource, { pagination, sort, filter, meta }) => {
    const response = await getProvider(resource).getList(
      pagination?.page || 1,
      pagination?.perPage || 10,
      filter,
      sort,
      meta
    );
    return {
      data: response,
      total: response.length,
      pageInfo: {
        // FIXME: fix pagination: one way to do it is to fetch the next page and check if there are still elements
        hasNextPage: response.length >= (pagination?.perPage || 10),
        hasPreviousPage: (pagination?.page || 1) > 1,
      },
    };
  },
  getOne: async (resource, { id: payloadId, meta }) => {
    const response = await getProvider(resource).getOne(
      payloadId as string,
      meta
    );
    return { data: response };
  },
  delete: async (resource, { id: payloadId, meta }) => {
    const response = await getProvider(resource).delete(
      payloadId as string,
      meta
    );
    return { data: response };
  },
  deleteMany: () => {
    throw new Error('Not Implemented');
  },
  getMany: () => {
    throw new Error('Not Implemented');
  },
  getManyReference: () => {
    throw new Error('Not Implemented');
  },
  updateMany: () => {
    throw new Error('Not Implemented');
  },
};
