import { useEffect, useState } from "react";
import { insertTask } from "../services/requests";

const TaskButtonAdd = ({
  setAlmostAddTask,
  descriptionInput,
  priorityInput,
  setTasks
}) => {
  const [task, setTask] = useState([]);

  useEffect(() => {
    const date = new Date();
    setTask({
      description: descriptionInput,
      priority: priorityInput,
      date: date.toISOString(),
    })
  }, [descriptionInput, priorityInput]);

  const postTask = async (body) => {
    setAlmostAddTask(true);

    await insertTask(body)
      .then((response) => setTasks(response))
      .catch((error) => console.log(error.message));

    setAlmostAddTask(false);
  }
  return (
    <>
      <div class="ui animated button" tabindex="0" onClick={() => postTask({ task })}>
        <div class="visible content">Adicionar</div>
        <div class="hidden content">
          <i class="plus icon"></i>
        </div>
      </div>
    </>
  );
}

export default TaskButtonAdd;