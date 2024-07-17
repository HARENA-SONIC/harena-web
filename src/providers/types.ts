export type ResourceIdentifier = { id: string };
export type MutationType = 'CREATE' | 'UPDATE';

export type HarenaDataProvider<T extends ResourceIdentifier> = {
  getOne: (id: string, meta: any) => Promise<T>;
  saveOrUpdate: (
    payload: T,
    meta: { mutationType: MutationType; [T: string]: any }
  ) => Promise<T>;
  getList: (
    page: number,
    pageSize: number,
    filter: any,
    sort: any,
    meta: any
  ) => Promise<T[]>;
  delete: (id: string, meta: any) => Promise<T>;
};
