import React, { useState, useEffect } from 'react';
import { Header, Table } from "../components";
import TaskInput from '../components/TaskInput';
import { requestTasks, insertTask } from "../services/requests";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState([]);
  const [descriptionInput, setDescriptionInput] = useState();
  const [priorityInput, setPriorityInput] = useState();
  const [addTaskCount, setAddTaskCount] = useState(0);
  const [almostAddTask, setAlmostAddTask] = useState(false);

  const getTasks = (endpoint) => requestTasks(endpoint)
    .then((response) => setTasks(response))
    .catch((error) => console.log(error));

  const postTask = async (endpoint, body) => {
    setAlmostAddTask(true);

    await insertTask(endpoint, body)
      .then((response) => setTasks(response))
      .catch((error) => console.log(error.message));

    setAlmostAddTask(false);
  }

  useEffect(() => {
    const endpoint = '/tasks';

    let timer = setTimeout(() => {
      getTasks(endpoint);
    }, 1000); // timer usado apenas melhorar visualizacao do efeito Loading;

    return () => { clearTimeout(timer) }
  }, []);

  useEffect(() => {
    const endpoint = '/tasks';
    postTask(endpoint, { task });
  }, [addTaskCount]);

  useEffect(() => {
    const date = new Date();

    setTask({
      description: descriptionInput,
      priority: priorityInput,
      date: date.toISOString(),
    })
  }, [descriptionInput, priorityInput])

  return (
    <>
      <Header />
      <br />
      <TaskInput
        descriptionInput={descriptionInput}
        setDescriptionInput={setDescriptionInput}
        priorityInput={priorityInput}
        setPriorityInput={setPriorityInput}
      />
      <div class="ui animated button" tabindex="0" onClick={() => setAddTaskCount(addTaskCount + 1)}>
        <div class="visible content">Adicionar</div>
        <div class="hidden content">
          <i class="plus icon"></i>
        </div>
      </div>
      <br />
      <br />
      <Table tasks={tasks} setTasks={setTasks} almostAddTask={almostAddTask} />
    </>
  )
}

export default Tasks;