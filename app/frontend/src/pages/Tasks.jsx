import React, { useState, useEffect } from 'react';
import { Header, Table } from "../components";
import { requestTasks } from "../services/requests";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const getTasks = (endpoint) => requestTasks(endpoint)
    .then((response) => setTasks(response))
    .catch((error) => console.log(error));

  useEffect(() => {
    const endpoint = '/tasks';
    setTimeout(() => {
      getTasks(endpoint);
    }, 1000); // timer usado apenas melhorar visualizacao do efeito Loading;
  }, []);

  return (
    <>
      <Header />
      <Table tasks={tasks} />
    </>
  )
}

export default Tasks;