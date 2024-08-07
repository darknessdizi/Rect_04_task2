export interface IData {
  date: string,
  path: string,
};

export interface IFormData {
  date: string | null | undefined,
  path: string | null | undefined,
  array: IData[],
  statusEditor: boolean,
};

export type DataTable = IData[];

export interface IPropsTable {
  array: DataTable,
  click: any,
}

export interface IPropsForm {
  date: string,
  path: string,
  submit: any,
  change: any,
}

export interface IPropsInput {
  name: string,
  text: string,
  value: string,
  onChange: any,
  pattern: string,
}

export interface IElements {
  date: HTMLInputElement,
  path: HTMLInputElement,
};
