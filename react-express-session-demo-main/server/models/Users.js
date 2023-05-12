const Users = function (Sequelize, DataTypes) {
  return Sequelize.define(
    'users',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      tableName: 'users',
      freezeTableName: true,
      timestamps: false,
    }
  );
};

module.exports = Users;
