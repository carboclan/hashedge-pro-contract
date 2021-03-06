
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('swap721', {
    contractAddr: {
      type: DataTypes.STRING(42),
      allowNull: false,
      primaryKey: true
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    owner: {
      type: DataTypes.STRING(42),
      allowNull: true
    },
    issueTx: {
      type: DataTypes.STRING(66),
      allowNull: true
    },
    issuer: {
      type: DataTypes.STRING(42),
      allowNull: true
    },
    price: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    contractSize: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    fixLegPayoutPerDay: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    startTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    endTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    lastSettleTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    margin: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    totalFixLegPaid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    totalFloatingLegPaid: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    timestamps: false,
    tableName: 'swap721',
    indexes: [
      { fields: ['owner'] },
      { fields: ['issuer'] }
    ]
  });
};
