/* eslint-disable jsx-a11y/control-has-associated-label */
import PropTypes from 'prop-types';
import { React } from 'react';
import { deleteTask } from '../../services/requests';

const StatusColum = ({ task, updateEachTask, setTasks }) => {
  const removeTask = (param) => deleteTask(param)
    .then((response) => setTasks(response))
    .catch((error) => console.log(error));

  const handleClick = (id, bool) => updateEachTask({ id, editedTask: { status: bool } });

  return (
    <td>
      <div>
        {
          task.status
            ? (
              <i
                role="button"
                className="check circle outline big green icon"
                id={ task.id }
                onClick={ ({ target: { id } }) => handleClick(id, false) }
                onKeyDown={ () => {} }
                tabIndex={ 0 }
              />
            )
            : (
              <i
                role="button"
                className="circle outline big icon"
                id={ task.id }
                onClick={ ({ target: { id } }) => handleClick(id, true) }
                onKeyDown={ () => {} }
                tabIndex={ 0 }
              />
            )
        }
        <i
          role="button"
          className="trash alternate outline icon"
          id={ task.id }
          onClick={ ({ target }) => removeTask(target.id) }
          onKeyDown={ () => {} }
          tabIndex={ 0 }
        />
      </div>
    </td>
  );
};

StatusColum.propTypes = {
  setTasks: PropTypes.func.isRequired,
  task: PropTypes.shape({
    id: PropTypes.number,
    status: PropTypes.bool,
  }).isRequired,
  updateEachTask: PropTypes.func.isRequired,
};

export default StatusColum;
