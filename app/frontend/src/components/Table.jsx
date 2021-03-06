/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import { React, useState, useEffect } from 'react';
import { updateTask } from '../services/requests';
import LoadingTable from './LoadingTable';
import { DateColumn, DescriptionColumn, PriorityColumn, StatusColumn } from './table';

const Table = ({
  tasks,
  setTasks,
  almostAddTask,
}) => {
  const [sortType, setSortType] = useState('date-down');

  const updateEachTask = (body) => updateTask(body)
    .then((response) => setTasks(response))
    .catch((error) => console.log(error));

  const handleClick = (value) => {
    if (sortType.includes('down')) setSortType(`${value}-up`);
    if (sortType.includes('up')) setSortType(`${value}-down`);
  };

  const tableOrderByColumn = (type) => {
    const orderTasks = [...tasks];

    switch (type) {
    case 'date-up':
      orderTasks.sort((a, b) => b.id - a.id);
      break;
    case 'date-down':
      orderTasks.sort((a, b) => a.id - b.id);
      break;
    case 'status-up':
      orderTasks.sort((a, b) => b.status - a.status);
      break;
    case 'status-down':
      orderTasks.sort((a, b) => a.status - b.status);
      break;
    case 'description-up':
      orderTasks.sort((a, b) => b.description.localeCompare(a.description, 'pt'));
      break;
    case 'description-down':
      orderTasks.sort((a, b) => a.description.localeCompare(b.description, 'pt'));
      break;
    case 'priority-up':
      orderTasks.sort((a, b) => b.priority - a.priority);
      break;
    case 'priority-down':
      orderTasks.sort((a, b) => a.priority - b.priority);
      break;
    default:
      break;
    }
    setTasks(orderTasks);
  };

  useEffect(() => {
    tableOrderByColumn(sortType);
  }, [sortType]);

  const arrowSort = (value) => {
    if (sortType === `${value}-down`) return (<i className="angle down icon" />);
    if (sortType === `${value}-up`) return (<i className="angle up icon" />);
  };

  return (
    <>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th onClick={ () => handleClick('status') }>
              Status
              {arrowSort('status')}
            </th>
            <th onClick={ () => handleClick('description') }>
              Descri????o
              {arrowSort('description')}
            </th>
            <th onClick={ () => handleClick('date') }>
              Criado
              {arrowSort('date')}
            </th>
            <th onClick={ () => handleClick('priority') }>
              Prioridade
              {arrowSort('priority')}
            </th>
          </tr>
        </thead>

        <tbody>
          {
            tasks.map((task) => (
              <tr key={ task.id }>
                <StatusColumn
                  task={ task }
                  updateEachTask={ updateEachTask }
                  setTasks={ setTasks }
                />
                <DescriptionColumn
                  updateEachTask={ updateEachTask }
                  task={ task }
                />
                <DateColumn task={ task } />
                <PriorityColumn
                  updateEachTask={ updateEachTask }
                  task={ task }
                />
              </tr>
            ))
          }
        </tbody>
      </table>

      {!tasks.length ? <LoadingTable quantity={ 10 } /> : null}
      {almostAddTask ? <LoadingTable quantity={ 1 } /> : null}

    </>
  );
};

Table.propTypes = {
  almostAddTask: PropTypes.bool.isRequired,
  setTasks: PropTypes.func.isRequired,
  tasks: PropTypes.shape({
    length: PropTypes.number,
    map: PropTypes.func,
  }).isRequired,
};

export default Table;
