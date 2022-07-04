import { useState, useEffect } from 'react';
import { deleteTask, updateTask } from '../services/requests';
import LoadingTable from "./LoadingTable";

const Table = ({
  tasks,
  setTasks,
  almostAddTask,
}) => {
  const [sortType, setSortType] = useState('date-down')

  const removeTask = (param) => deleteTask(param)
    .then((response) => setTasks(response))
    .catch((error) => console.log(error));

  const updateStatusTask = (body) => updateTask(body)
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
                            onClick={({ target }) => updateStatusTask({ id: target.id, editedTask: { status: false } })}
                          ></i>
                          : <i
                            class="circle outline big icon"
                            id={task.id}
                            onClick={({ target }) => updateStatusTask({ id: target.id, editedTask: { status: true } })}
                          ></i>
                      }
                      <i
                        class="trash alternate outline icon"
                        id={task.id}
                        onClick={({ target }) => removeTask(target.id)}
                      ></i>
                    </div>
                  </td>
                  <td>{task.description}</td>
                  <td>{datePhrase}</td>
                  <td>
                    {task.priority === 1 ? <div class="ui green button"></div> : null}
                    {task.priority === 2 ? <button class="ui yellow button"></button> : null}
                    {task.priority === 3 ? <button class="ui red button"></button> : null}
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