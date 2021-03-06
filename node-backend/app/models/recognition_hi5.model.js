module.exports = (sequelize, Sequelize) => {
  const Recognition_hi5 = sequelize.define(
    "recognition_hi5",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        notNull: true,
      },
      recognition_id: {
        type: Sequelize.INTEGER,
        notNull: true,
      },
      given_by: {
        type: Sequelize.INTEGER,
        notNull: true,
      },
      given_at: {
        type: Sequelize.BIGINT,
        notNull: true,
      },
    },
    {
      timestamp: false,
      createdAt: false,
      updatedAt: false,
    }
  );
  return Recognition_hi5;
};
