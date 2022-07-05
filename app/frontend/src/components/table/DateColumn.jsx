import { React } from 'react';
import PropTypes from 'prop-types';

const DateColumn = ({ task }) => {
  const date = new Date(task.date);
  const dateDayMonth = `${date.getDate()}/${date.getMonth() + 1}`;
  const dateHour = `${date.getHours()}:${date.getMinutes()}`;
  const datePhrase = `${dateDayMonth} às ${dateHour}`;

  return (
    <td>{datePhrase}</td>
  );
};

DateColumn.propTypes = {
  task: PropTypes.shape({
    date: PropTypes.string,
  }).isRequired,
};

export default DateColumn;
