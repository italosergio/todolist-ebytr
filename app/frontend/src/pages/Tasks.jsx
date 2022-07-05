import React, { useState, useEffect } from 'react';
import { requestTasks } from '../services/requests';
import {
  Header,
  Table,
  TaskButtonAdd,
  TaskButtonRemoveAll,
  TaskInput,
} from '../components';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [descriptionInput, setDescriptionInput] = useState();
  const [priorityInput, setPriorityInput] = useState('0');
  const [almostAddTask, setAlmostAddTask] = useState(false);

  const getTasks = () => requestTasks()
    .then((response) => setTasks(response))
    .catch((error) => console.log(error));

  useEffect(() => {
    const ONE_SEC = 1000;
    const timer = setTimeout(() => {
      getTasks();
    }, ONE_SEC); // timer usado apenas melhorar visualizacao do efeito Loading;
    return () => { clearTimeout(timer); };
  }, []);

  return (
    <>
      <Header />
      <br />
      <TaskInput
        descriptionInput={ descriptionInput }
        setDescriptionInput={ setDescriptionInput }
        priorityInput={ priorityInput }
        setPriorityInput={ setPriorityInput }
      />
      <div>
        <TaskButtonAdd
          setAlmostAddTask={ setAlmostAddTask }
          descriptionInput={ descriptionInput }
          priorityInput={ priorityInput }
          setTasks={ setTasks }
        />
        <TaskButtonRemoveAll setTasks={ setTasks } />
      </div>
      <br />
      <Table
        tasks={ tasks }
        setTasks={ setTasks }
        almostAddTask={ almostAddTask }
      />
    </>
  );
};

export default Tasks;
