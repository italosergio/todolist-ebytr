import { useState, useEffect } from 'react';
import LoadingTable from "./LoadingTable";

const Table = ({ tasks, setTasks, almostAddTask }) => {
  const [sortType, setSortType] = useState('date-down')
  
  const handleClick = (value) => {
    console.log(value);
    if (sortType.includes('down')) setSortType(`${value}-up`);
    if (sortType.includes('up')) setSortType(`${value}-down`);
    console.log(sortType)

    let orderTasks = [];

    switch (sortType) {
      case 'date-up':
        orderTasks = tasks.sort((a, b) => b.id - a.id)
        break;
      case 'date-down':
        orderTasks = tasks.sort((a, b) => a.id - b.id)
        break;
      case 'status-up':
        orderTasks = tasks.sort((a, b) => b.status - a.status)
        break;
      case 'status-down':
        orderTasks = tasks.sort((a, b) => a.status - b.status)
        break;
      case 'description-up':
        orderTasks = tasks.sort((a, b) => b.description - a.description)
        break;
      case 'description-down':
        orderTasks = tasks.sort((a, b) => a.description - b.description)
        break;
      case 'priority-up':
        orderTasks = tasks.sort((a, b) => b.priority - a.priority)
        break;
      case 'priority-down':
        orderTasks = tasks.sort((a, b) => a.priority - b.priority)
        break;
      default:
        break;
    }
    setTasks(orderTasks);
  }

  useEffect(() => {
  })

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
            tasks.map((e) => {
              const date = new Date(e.date);
              const datePhrase = `${date.getDate()}/${date.getMonth() + 1} as ${date.getHours()}:${date.getMinutes()} `
              const status = e.status ? 'ok' : '--'
              return (
                <tr>
                  <td>{status}</td>
                  <td>{e.description}</td>
                  <td>{datePhrase}</td>
                  <td>{e.priority}</td>
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