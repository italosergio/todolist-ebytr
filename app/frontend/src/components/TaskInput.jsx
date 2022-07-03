const TaskAddInput = ({
  descriptionInput,
  setDescriptionInput,
  priorityInput,
  setPriorityInput,
}) => {
  return (
    <>
     <label htmlFor="description">
      <input
        disabled={false}
        id="description"
        type="text"
        placeholder="Descricao da tarefa"
        data-testid="description"
        value={ descriptionInput }
        onChange={({ target: { value } }) => setDescriptionInput(value)}
      />
      Inserir tarefa
    </label>
    <br/>
    <label htmlFor="priority">
      <input
        disabled={false}
        id="priority"
        type="number"
        // min="1"
        // max="3"
        placeholder="Prioridade"
        data-testid="priority"
        value={ priorityInput }
        onChange={({ target: { value } }) => setPriorityInput(value)}
      />
      Prioridade
    </label>
    <br/>
    <br/>
    </>
  );
}

export default TaskAddInput;