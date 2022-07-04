const PriorityColumn = ({ task, updateEachTask }) => {
  return (
    <td data-inverted="" data-tooltip="Click para editar" data-position="top left">
      {
        task.priority === 1
          ? <div
            id={task.id}
            class="ui green button"
            onClick={({ target: { id } }) => updateEachTask({ id, editedTask: { priority: 2 } })}
          />
          : null
      }
      {
        task.priority === 2
          ? <div
            id={task.id}
            class="ui yellow button"
            onClick={({ target: { id } }) => updateEachTask({ id, editedTask: { priority: 3 } })}
          />
          : null
      }
      {
        task.priority === 3
          ? <div
            id={task.id}
            class="ui red button"
            onClick={({ target: { id } }) => updateEachTask({ id, editedTask: { priority: 0 } })}
          />
          : null
      }
      {
        task.priority === 0
          ? <div
            id={task.id}
            class="ui basic button"
            onClick={({ target: { id } }) => updateEachTask({ id, editedTask: { priority: 1 } })}
          />
          : null
      }
    </td>
  );
}

export default PriorityColumn;