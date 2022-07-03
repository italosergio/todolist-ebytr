import LoadingTable from "./LoadingTable";

const Table = ({ tasks }) => {
  return (
    <>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>Status</th>
            <th>Descrição</th>
            <th>Criado</th>
            <th>Prioridade</th>
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

      { !tasks.length ? <LoadingTable /> : null }
      
    </>
  )
}

export default Table;