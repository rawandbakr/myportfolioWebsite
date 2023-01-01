import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getprojects = () => async (dispatch) => {
  try {
    const { data } = await api.fetchprojects();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createproject = (project) => async (dispatch) => {
  try {
    const { data } = await api.createproject(project);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateproject = (id, project) => async (dispatch) => {
  try {
    const { data } = await api.updateproject(id, project);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const likeproject = (id) => async (dispatch) => {
  try {
    const { data } = await api.likeproject(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteproject = (id) => async (dispatch) => {
  try {
    await api.deleteproject(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};