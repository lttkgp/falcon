import axios, { AxiosResponse } from "axios";
import { endpoints } from "../utils/endpoints";
import { FeedResponse } from "../store/list/types";

const getLatest = async (
  start: number,
  limit: number
): Promise<AxiosResponse<FeedResponse>> => {
  return axios.get(`${endpoints.LATEST}?start=${start}&limit=${limit}`);
};

const getFrequent = async (
  start: number,
  limit: number
): Promise<AxiosResponse<FeedResponse>> => {
  return axios.get(`${endpoints.FREQUENT}?start=${start}&limit=${limit}`);
};

export const feedService = {
  getLatest,
  getFrequent,
};
