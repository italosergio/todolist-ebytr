import React, { useState, useEffect } from 'react';
import { Header, Table } from "../components";
import TaskInput from '../components/TaskInput';
import { requestTasks } from "../services/requests";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [descriptionInput, setDescriptionInput] = useState('');
  const [priorityInput, setPriorityInput] = useState('');
  const [addTaskCount, setAddTaskCount] = useState(0);
  const [almostAddTask, setAlmostAddTask] = useState(false);

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
      <TaskInput
        descriptionInput={descriptionInput}
        setDescriptionInput={setDescriptionInput}
        priorityInput={ priorityInput }
        setPriorityInput={setPriorityInput}
      />
      <Table tasks={tasks} />
    </>
  )
}

export default Tasks;