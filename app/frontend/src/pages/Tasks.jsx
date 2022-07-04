import React, { useState, useEffect } from 'react';
import { Header, Table, TaskInput } from "../components";
import { requestTasks, insertTask, deleteTasks, deleteTask } from "../services/requests";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState([]);
  const [descriptionInput, setDescriptionInput] = useState();
  const [priorityInput, setPriorityInput] = useState();
  const [almostAddTask, setAlmostAddTask] = useState(false);

  const getTasks = () => requestTasks()
    .then((response) => setTasks(response))
    .catch((error) => console.log(error));

  const postTask = async (endpoint, body) => {
    setAlmostAddTask(true);

    await insertTask(endpoint, body)
      .then((response) => setTasks(response))
      .catch((error) => console.log(error.message));

    setAlmostAddTask(false);
  }

  const removeTasks = () => deleteTasks()
    .then((response) => setTasks(response))
    .catch((error) => console.log(error));

  const removeTask = (param) => deleteTask(param)
    .then((response) => setTasks(response))
    .catch((error) => console.log(error));

  useEffect(() => {
    let timer = setTimeout(() => {
      getTasks();
    }, 1000); // timer usado apenas melhorar visualizacao do efeito Loading;
    return () => { clearTimeout(timer) }
  }, []);

  useEffect(() => {
    const date = new Date();
    setTask({
      description: descriptionInput,
      priority: priorityInput,
      date: date.toISOString(),
    })
  }, [descriptionInput, priorityInput]);

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
      <div>
        <div class="ui animated button" tabindex="0" onClick={() => postTask({ task })}>
          <div class="visible content">Adicionar</div>
          <div class="hidden content">
            <i class="plus icon"></i>
          </div>
        </div>
        <div class="ui animated button" tabindex="0" onClick={() => removeTasks()}>
          <div class="visible content">Remover Todas</div>
          <div class="hidden content">
            <i class="trash alternate icon"></i>
          </div>
        </div>
      </div>
      <br />
      <Table
        tasks={tasks}
        setTasks={setTasks}
        almostAddTask={almostAddTask}
        removeTask={removeTask}
      />
    </>
  )
}

export default Tasks;