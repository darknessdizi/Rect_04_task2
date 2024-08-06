export interface IData {
  date: string,
  path: string,
};

export interface IFormData {
  date: string,
  path: string,
  array: IData[],
};

export type DataTable = IData[];

export interface IPropsTable {
  array: DataTable
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

export interface $elements {
  date: HTMLInputElement,
  path: HTMLInputElement,
};
