import axios from "../helpers/axios";
import { IRow, IPostData } from "../types/Income";

const endPoint = "/income";

export const getIncomeData = () => {
  return axios.get<IRow[]>(endPoint);
};

export const postIncomeData = (incomeData: IPostData) => {
  return axios.post(endPoint, incomeData);
};
