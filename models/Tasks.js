module.exports = function(sequelize, DataTypes){
  var Task = sequelize.define('task', {
    title: {type: DataTypes.STRING, allowNull: false}
  }, {
    tableName: 'tasks'
  });
  Task.associate = function(models){
    Task.belongsTo(models.priority, {
      foreignKey: {
        name: 'priority_id',
        allowNull: false
      }
    });
    Task.belongsTo(models.status, {
      foreignKey: {
        name: 'status_id',
        allowNull: false,
        defaultValue: 1
      }
    });
    Task.belongsTo(models.user, {
      foreignKey: {
        name: 'createdBy_id',
        allowNull: false
      }
    });
    Task.belongsTo(models.user, {
      foreignKey: {
        name: 'assignedTo_id',
        allowNull: false
      }
    });
  }
  return Task;
};