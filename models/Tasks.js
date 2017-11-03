module.exports = function(sequelize, DataTypes){
  var Task = sequelize.define('task', {
    title: {type: DataTypes.STRING, allowNull: false},
    created_by_id: {type: DataTypes.INTEGER, allowNull: false},
    assigned_to_id: {type: DataTypes.INTEGER, allowNull: false}
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
    Task.belongsTo(models.user, { foreignKey: 'created_by_id', as: 'creator'});
    Task.belongsTo(models.user, { foreignKey: 'assigned_to_id', as: 'dev'});
  }
  return Task;
};