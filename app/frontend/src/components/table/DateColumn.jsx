const DateColumn = ({task}) => {
  const date = new Date(task.date);
  const datePhrase = `${date.getDate()}/${date.getMonth() + 1} as ${date.getHours()}:${date.getMinutes()}`

  return (
    <td>{datePhrase}</td>
  );
}

export default DateColumn;