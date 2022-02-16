export type IRow = {
  id: number;
  _id: string;
  name: string;
  amount: number;
  date?: string;
};

export type ICol = {
  field: string;
  headerName: string;
  width?: number;
};

export type IPostData = {
  name: string;
  amount: number;
};
