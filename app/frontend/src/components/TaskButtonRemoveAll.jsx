import { deleteTasks } from "../services/requests";

const TaskButtonRemoveAll = ({ setTasks }) => {
  const removeTasks = () => deleteTasks()
    .then((response) => setTasks(response))
    .catch((error) => console.log(error));

  return (
    <>
      <div class="ui animated button" tabindex="0" onClick={() => removeTasks()}>
        <div class="visible content">Remover todas</div>
        <div class="hidden content">
          <i class="trash alternate icon"></i>
        </div>
      </div>
    </>
  );
}

export default TaskButtonRemoveAll;