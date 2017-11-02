module.exports = function(sequelize, DataTypes){
  var Priority = sequelize.define('priority', {
    priority: {type: DataTypes.STRING, unique:true, allowNull:false}
  }, {
    tableName: 'priority',
    timestamps: false
  });
  return Priority;
};