/* eslint-disable jsx-a11y/control-has-associated-label */
import PropTypes from 'prop-types';
import { React } from 'react';

const PriorityColumn = ({ task, updateEachTask }) => {
  const HIGH_PRIORITY = 3;
  const MIDDLE_PRIORITY = 2;
  const LOW_PRIORITY = 1;
  const NO_PRIORITY = 0;

  const handleClick = (id, number) => updateEachTask(
    { id, editedTask: { priority: number } },
  );

  return (
    <td data-inverted="" data-tooltip="Click para editar" data-position="top left">
      {
        task.priority === LOW_PRIORITY
          ? (
            <div
              role="button"
              id={ task.id }
              className="ui green button"
              onClick={ ({ target: { id } }) => handleClick(id, MIDDLE_PRIORITY) }
              onKeyDown={ () => {} }
              tabIndex={ 0 }
            />
          )
          : null
      }
      {
        task.priority === MIDDLE_PRIORITY
          ? (
            <div
              role="button"
              id={ task.id }
              className="ui yellow button"
              onClick={ ({ target: { id } }) => handleClick(id, HIGH_PRIORITY) }
              onKeyDown={ () => {} }
              tabIndex={ 0 }
            />
          )
          : null
      }
      {
        task.priority === HIGH_PRIORITY
          ? (
            <div
              role="button"
              id={ task.id }
              className="ui red button"
              onClick={ ({ target: { id } }) => handleClick(id, NO_PRIORITY) }
              onKeyDown={ () => {} }
              tabIndex={ 0 }
            />
          )
          : null
      }
      {
        task.priority === NO_PRIORITY
          ? (
            <div
              role="button"
              id={ task.id }
              className="ui basic button"
              onClick={ ({ target: { id } }) => handleClick(id, LOW_PRIORITY) }
              onKeyDown={ () => {} }
              tabIndex={ 0 }
            />
          )
          : null
      }
    </td>
  );
};

PriorityColumn.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number,
    priority: PropTypes.number,
  }).isRequired,
  updateEachTask: PropTypes.func.isRequired,
};

export default PriorityColumn;
