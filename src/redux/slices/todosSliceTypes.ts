export enum sortTypeEnum {
  ALL,
  ACTIVE,
  COMPLETED,
}
export interface itemsProps {
  id: number;
  description: string;
  checked: boolean;
}
export interface listProps {
  list: itemsProps[];
  sort: number;
}
