module.exports = function(sequelize, DataTypes){
  var User = sequelize.define('user', {
    name: {type: DataTypes.STRING, unique:true, allowNull:false}
  }, {
    tableName: 'users'
  });
  return User;
};