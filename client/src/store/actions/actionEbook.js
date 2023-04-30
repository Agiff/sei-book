import { baseUrl } from "../../config";
import axios from 'axios';
import { FETCH_EBOOKS, FETCH_EBOOK_DETAIL } from "./actionType";

export const fetchEbooks = () => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios.get(`${baseUrl}/ebooks/`, {
        headers: { access_token: localStorage.access_token }
      });
      dispatch({ type: FETCH_EBOOKS, payload: data });
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export const fetchEbookDetail = (id) => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios.get(`${baseUrl}/ebooks/${id}`, {
        headers: { access_token: localStorage.access_token }
      });
      dispatch({ type: FETCH_EBOOK_DETAIL, payload: data });
      return data;
    } catch (error) {
      throw error;
    }
  }
}