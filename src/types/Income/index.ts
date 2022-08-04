export type IRow = {
  id: number;
  _id: string;
  title: string;
  amount: number;
  date?: string;
};

export type IRowData = {
  _id: string;
  title: string;
  amount: number;
  date?: string;
};

export type ICol = {
  field: string;
  headerName: string;
  width?: number;
};

export type IPostData = {
  title: string;
  amount: string;
};
