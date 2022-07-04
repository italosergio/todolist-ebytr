import { deleteTask } from "../../services/requests";

const StatusColum = ({ task, updateEachTask, setTasks }) => {
  const removeTask = (param) => deleteTask(param)
    .then((response) => setTasks(response))
    .catch((error) => console.log(error));
  
  return (
    <td>
      <div
      >
        {
          task.status
            ? <i
              class="check circle outline big green icon"
              id={task.id}
              onClick={({ target }) => updateEachTask({ id: target.id, editedTask: { status: false } })}
            ></i>
            : <i
              class="circle outline big icon"
              id={task.id}
              onClick={({ target }) => updateEachTask({ id: target.id, editedTask: { status: true } })}
            ></i>
        }
        <i
          class="trash alternate outline icon"
          id={task.id}
          onClick={({ target }) => removeTask(target.id)}
        ></i>
      </div>
    </td>
  );
}

export default StatusColum;