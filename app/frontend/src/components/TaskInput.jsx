import PropTypes from 'prop-types';
import { React } from 'react';

const TaskAddInput = ({
  descriptionInput,
  setDescriptionInput,
  priorityInput,
  setPriorityInput,
}) => (
  <>
    <div className="ui large input focus">
      <input
        id="description"
        type="text"
        placeholder="Descricao da tarefa"
        data-testid="description"
        value={ descriptionInput }
        onChange={ ({ target: { value } }) => setDescriptionInput(value) }
      />
    </div>
    <br />
    <select
      className="ui compact selection dropdown"
      id="priority"
      data-testid="priority"
      value={ priorityInput }
      onChange={ ({ target: { value } }) => setPriorityInput(value) }
    >
      <option selected value={ 0 }>Sem prioridade</option>
      <option value={ 1 }>Baixa</option>
      <option value={ 2 }>Media</option>
      <option value={ 3 }>Alta</option>
    </select>
    <br />
    <br />
  </>
);

TaskAddInput.propTypes = {
  descriptionInput: PropTypes.string.isRequired,
  priorityInput: PropTypes.number.isRequired,
  setDescriptionInput: PropTypes.func.isRequired,
  setPriorityInput: PropTypes.func.isRequired,
};

export default TaskAddInput;
