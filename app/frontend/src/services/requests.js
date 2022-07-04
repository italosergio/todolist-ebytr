import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`,
});

export const requestTasks = async () => {
  const { data: { tasks } } = await api.get('/tasks');
  return tasks;
};

export const insertTask = async (body) => {
  const { data: { tasks } } = await api.post('/tasks', body);
  return tasks;
};

export const deleteTasks = async () => {
  const { data: { tasks } } = await api.delete('/tasks');
  return tasks;
};

export const deleteTask = async (param) => {
  const { data: { tasks } } = await api.delete(`/tasks/${param}`);
  return tasks;
};

export default api;
