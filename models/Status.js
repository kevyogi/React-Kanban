module.exports = function(sequelize, DataTypes){
  var Status = sequelize.define('status', {
    status: {type: DataTypes.STRING, unique:true, allowNull:false}
  }, {
    tableName: 'status',
    timestamps: false
  });
  return Status;
};