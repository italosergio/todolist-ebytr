export default interface ITask {
  id: number,
  description: string,
  priority: number,
  date: string,
  status?: boolean,
}
