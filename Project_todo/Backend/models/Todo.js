const Todo = function (Sequelize, DataTypes) {
  const model = Sequelize.define(
    "todo",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      userid: { type: DataTypes.STRING(20), allowNull: false },
      pw: { type: DataTypes.STRING(20), allowNull: false },
      title: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      done: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    { tableName: "todo", freezeTableName: true, timestamps: false }
  );
  return model;
};

module.exports = Todo;
