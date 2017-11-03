module.exports = function(sequelize, DataTypes){
  var User = sequelize.define('user', {
    name: {type: DataTypes.STRING, unique:true, allowNull:false}
  }, {
    tableName: 'users'
  });
  User.associate = function(models){
    User.hasMany(models.task, { foreignKey: 'created_by_id', as: 'cards'});
    User.hasMany(models.task, { foreignKey: 'assigned_to_id', as: 'tasks'});
  }
  return User;
};