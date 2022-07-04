import React, { useState, useEffect } from 'react';
import { Header, Table, TaskButtonAdd, TaskButtonRemoveAll, TaskInput } from "../components";
import { requestTasks, deleteTask } from "../services/requests";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [descriptionInput, setDescriptionInput] = useState();
  const [priorityInput, setPriorityInput] = useState();
  const [almostAddTask, setAlmostAddTask] = useState(false);

  const getTasks = () => requestTasks()
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
        <TaskButtonAdd
          setAlmostAddTask={setAlmostAddTask}
          descriptionInput={descriptionInput}
          priorityInput={priorityInput}
          setTasks={setTasks}
        />
        <TaskButtonRemoveAll setTasks={setTasks} />
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