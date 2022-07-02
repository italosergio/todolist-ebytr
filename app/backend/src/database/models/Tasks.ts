import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class Tasks extends Model {
  id!: number;

  description!: string;

  priority!: number;
}

Tasks.init({
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  description: {
    type: STRING,
    allowNull: false,
  },
  priority: {
    type: INTEGER,
    allowNull: true,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'tasks',
  timestamps: false,
});

// Users.hasMany(Tasks, { foreignKey: 'user_id', as: 'userId' });

// Tasks.belongsTo(User, { foreignKey: 'task_id', as: 'taskId' });

export default Tasks;
