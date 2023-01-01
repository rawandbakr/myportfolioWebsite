
import axios from 'axios';

const url = 'http://localhost:4000/projects';

export const fetchprojects = () => axios.get(url);
export const createproject = (newproject) => axios.project(url, newproject);
export const likeproject = (id) => axios.patch(`${url}/${id}/likeproject`);
export const updateproject = (id, updatedproject) => axios.patch(`${url}/${id}`, updatedproject);
export const deleteproject = (id) => axios.delete(`${url}/${id}`);