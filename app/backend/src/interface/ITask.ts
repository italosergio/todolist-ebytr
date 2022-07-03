export default interface ITask {
  id: number,
  description: string,
  priority: number,
  date: Date,
  status?: boolean,
}
