import { baseUrl } from "../../config";
import axios from 'axios';
import { FETCH_EBOOKS } from "./actionType";

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