import axios from "../helpers/axios";
import { IRowData, IPostData } from "../types/Income";

const endPoint = "/income";

export const getIncomeData = () => {
  return axios.get<IRowData[]>(endPoint);
};

export const postIncomeData = (incomeData: IPostData) => {
  return axios.post(endPoint, incomeData);
};
