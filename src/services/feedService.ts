import axios from "axios";
import { endpoints } from "../utils/endpoints";
import { FeedResponse } from "../store/list/types";

const getLatest = async (start: number, limit: number) => {
  return axios.get<FeedResponse>(`${endpoints.LATEST}?start=${start}&limit=${limit}`);
};

const getFrequent = async (start: number, limit: number) => {
  return axios.get<FeedResponse>(`${endpoints.FREQUENT}?start=${start}&limit=${limit}`);
};

const getPopular = async (start: number, limit: number) => {
  return axios.get<FeedResponse>(`${endpoints.POPULAR}?start=${start}&limit=${limit}`);
};

const getUnderrated = async (start: number, limit: number) => {
  return axios.get<FeedResponse>(`${endpoints.UNDERRATED}?start=${start}&limit=${limit}`);
};

export const feedService = {
  getLatest,
  getFrequent,
  getPopular,
  getUnderrated,
};
