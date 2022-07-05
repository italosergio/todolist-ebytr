import { ITask } from "../../interface";


const mockTasks: ITask[] = [
  {
    id: 1,
    description: "Reuniao Ebytr",
    priority: 3,
    status: false,
    date: "2022-07-05T06:10:51.000Z"
  },
  {
    id: 2,
    description: "Daily com o time",
    priority: 2,
    status: false,
    date: "2022-07-05T06:10:51.000Z"
  },
  {
    id: 3,
    description: "Sair com cachorro",
    priority: 0,
    status: true,
    date: "2022-07-05T06:10:51.000Z"
  },
  {
    id: 4,
    description: "Beber Agua",
    priority: 1,
    status: false,
    date: "2022-07-05T06:10:51.000Z"
  }
]

export default mockTasks;