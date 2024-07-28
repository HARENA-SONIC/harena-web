import { Devise } from '@harena-com/typescript-client';

export const renderMoney = (value: number, devise: Devise) => {
  return `${value} ${devise.code} (${devise.nom})`;
};
