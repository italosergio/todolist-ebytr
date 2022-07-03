const TaskAddInput = ({
  descriptionInput,
  setDescriptionInput,
}) => {
  console.log(descriptionInput);
  return (
    <label htmlFor="description">
      <input
        disabled={false}
        id="description"
        type="text"
        placeholder="Descricao da tarefa"
        data-testid="description"
        value={descriptionInput}
        onChange={({ target: { value } }) => setDescriptionInput(value)}
      />
      <br />
      <br />
    </label>
  );
}

export default TaskAddInput;