import { baseUrl } from "../../config";
import axios from 'axios';
import { FETCH_CURRENT_USER } from "./actionType";

export const fetchCurrentUser = () => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios.get(`${baseUrl}/users/`, {
        headers: { access_token: localStorage.access_token }
      });
      dispatch({ type: FETCH_CURRENT_USER, payload: data });
      return data;
    } catch (error) {
      throw error;
    }
  }
}