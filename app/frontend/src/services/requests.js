import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`,
});

export const requestTasks = async (endpoint) => {
  const { data: { tasks } } = await api.get(endpoint);
  return tasks;
};

export const insertTask = async (endpoint, body) => {
  const { data: { tasks } } = await api.post(endpoint, body);
  return tasks;
};

export const deleteTasks = async (endpoint) => {
  const { data: { tasks } } = await api.delete(endpoint);
  return tasks;
};

export default api;
