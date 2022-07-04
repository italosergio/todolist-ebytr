import { useState, useEffect } from 'react';
import { deleteTask, updateTask } from '../services/requests';
import LoadingTable from "./LoadingTable";

const Table = ({
  tasks,
  setTasks,
  almostAddTask,
}) => {
  const [sortType, setSortType] = useState('date-down')
  const [editor, setEditor] = useState(0)
  const [editorInput, setEditorInput] = useState('')

  const removeTask = (param) => deleteTask(param)
    .then((response) => setTasks(response))
    .catch((error) => console.log(error));

  const updateEachTask = (body) => updateTask(body)
    .then((response) => setTasks(response))
    .catch((error) => console.log(error));

  const handleClick = (value) => {
    if (sortType.includes('down')) setSortType(`${value}-up`);
    if (sortType.includes('up')) setSortType(`${value}-down`);
  }

  const tableOrderByColumn = (type) => {
    let orderTasks = [...tasks];

    switch (type) {
      case 'date-up':
        orderTasks.sort((a, b) => b.id - a.id)
        break;
      case 'date-down':
        orderTasks.sort((a, b) => a.id - b.id)
        break;
      case 'status-up':
        orderTasks.sort((a, b) => b.status - a.status)
        break;
      case 'status-down':
        orderTasks.sort((a, b) => a.status - b.status)
        break;
      case 'description-up':
        orderTasks.sort((a, b) => b.description.localeCompare(a.description, 'pt'))
        break;
      case 'description-down':
        orderTasks.sort((a, b) => a.description.localeCompare(b.description, 'pt'));
        break;
      case 'priority-up':
        orderTasks.sort((a, b) => b.priority - a.priority)
        break;
      case 'priority-down':
        orderTasks.sort((a, b) => a.priority - b.priority)
        break;
      default:
        break;
    }
    setTasks(orderTasks);
  }

  useEffect(() => {
    tableOrderByColumn(sortType);
  }, [sortType])

  const arrowSort = (value) => {
    if (sortType === `${value}-down`) return (<i class="angle down icon"></i>)
    if (sortType === `${value}-up`) return (<i class="angle up icon"></i>)
  }

  return (
    <>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th onClick={() => handleClick('status')}>Status
              {arrowSort('status')}
            </th>
            <th onClick={() => handleClick('description')}>Descrição
              {arrowSort('description')}
            </th>
            <th onClick={() => handleClick('date')}>Criado
              {arrowSort('date')}
            </th>
            <th onClick={() => handleClick('priority')}>Prioridade
              {arrowSort('priority')}
            </th>
          </tr>
        </thead>

        <tbody>
          {
            tasks.map((task) => {
              const date = new Date(task.date);
              const datePhrase = `${date.getDate()}/${date.getMonth() + 1} as ${date.getHours()}:${date.getMinutes()} `
              return (
                <tr>
                  <td>
                    <div
                    >
                      {
                        task.status
                          ? <i
                            class="check circle outline big green icon"
                            id={task.id}
                            onClick={({ target }) => updateEachTask({ id: target.id, editedTask: { status: false } })}
                          ></i>
                          : <i
                            class="circle outline big icon"
                            id={task.id}
                            onClick={({ target }) => updateEachTask({ id: target.id, editedTask: { status: true } })}
                          ></i>
                      }
                      <i
                        class="trash alternate outline icon"
                        id={task.id}
                        onClick={({ target }) => removeTask(target.id)}
                      ></i>
                    </div>
                  </td>
                  <td id={task.id} onDoubleClick={() => setEditor(task.id)} >
                    {
                      editor === task.id
                        ? (
                          <>
                            <div class="ui inverted large transparent icon input" data-inverted="" data-tooltip="Escreva a nova descrição e clique no icone para concluir" data-position="top left">
                              <input
                                type="text"
                                placeholder={task.description}
                                value={editorInput}
                                onChange={({ target: { value } }) => setEditorInput(value)}
                              />
                            </div>
                            <i
                              id={task.id}
                              class="edit icon"
                              onClick={({ target: { id } }) => {
                                setEditor(0);
                                updateEachTask({ id, editedTask: { description: editorInput } })
                                setEditorInput('')
                              }}
                            ></i>
                          </>
                        )
                        : <spam data-inverted="" data-tooltip="Double click para editar" data-position="top left">
                          {task.description}
                        </spam>
                    }
                  </td>
                  <td>{datePhrase}</td>
                  <td>
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
                </tr>
              )
            })
          }
        </tbody>
      </table>

      {!tasks.length ? <LoadingTable quantity={10} /> : null}
      {almostAddTask ? <LoadingTable quantity={1} /> : null}

    </>
  )
}

export default Table;