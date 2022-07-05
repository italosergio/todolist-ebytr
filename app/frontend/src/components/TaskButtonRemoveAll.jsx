import PropTypes from 'prop-types';
import { React } from 'react';
import { deleteTasks } from '../services/requests';

const TaskButtonRemoveAll = ({ setTasks }) => {
  const removeTasks = () => deleteTasks()
    .then((response) => setTasks(response))
    .catch((error) => console.log(error));

  return (
    <div
      role="button"
      className="ui animated button"
      tabIndex="0"
      onClick={ () => removeTasks() }
      onKeyDown={ () => {} }
    >
      <div className="visible content">Remover todas</div>
      <div className="hidden content">
        <i className="trash alternate icon" />
      </div>
    </div>
  );
};

TaskButtonRemoveAll.propTypes = {
  setTasks: PropTypes.func.isRequired,
};

export default TaskButtonRemoveAll;
