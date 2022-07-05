const TaskAddInput = ({
  descriptionInput,
  setDescriptionInput,
  priorityInput,
  setPriorityInput,
}) => {
  return (
    <>
      <div class="ui large input focus">
        <input 
        id="description"
        type="text" 
        placeholder="Descricao da tarefa"
        data-testid="description"
        value={descriptionInput}
        onChange={({ target: { value } }) => setDescriptionInput(value)}
        />
      </div>
      <br />
      <select
        class="ui compact selection dropdown"
        id="priority"
        data-testid="priority"
        value={priorityInput}
        onChange={({ target: { value } }) => setPriorityInput(value)}
      >
        <option selected value="0">Sem prioridade</option>
        <option value="1">Baixa</option>
        <option value="2">Media</option>
        <option value="3">Alta</option>
      </select>
      <br />
      <br />
    </>
  );
}

export default TaskAddInput;