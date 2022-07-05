import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { insertTask } from '../services/requests';

const TaskButtonAdd = ({
  setAlmostAddTask,
  descriptionInput,
  priorityInput,
  setTasks,
}) => {
  const [task, setTask] = useState([]);

  useEffect(() => {
    const date = new Date();
    setTask({
      description: descriptionInput,
      priority: priorityInput,
      date: date.toISOString(),
    });
  }, [descriptionInput, priorityInput]);

  const postTask = async (body) => {
    setAlmostAddTask(true);

    await insertTask(body)
      .then((response) => setTasks(response))
      .catch((error) => console.log(error.message));

    setAlmostAddTask(false);
  };
  return (
    <div
      role="button"
      className="ui animated button"
      tabIndex="0"
      onClick={ () => postTask({ task }) }
      onKeyDown={ () => {} }
    >
      <div className="visible content">Adicionar</div>
      <div className="hidden content">
        <i className="plus icon" />
      </div>
    </div>
  );
};

TaskButtonAdd.propTypes = {
  descriptionInput: PropTypes.string.isRequired,
  priorityInput: PropTypes.string.isRequired,
  setAlmostAddTask: PropTypes.func.isRequired,
  setTasks: PropTypes.func.isRequired,
};

export default TaskButtonAdd;
