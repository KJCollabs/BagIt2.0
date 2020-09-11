//Creating item table.
module.exports = function (sequelize, DataTypes) {
	var items = sequelize.define(
		"items",
		{
			items_name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			active: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
			},
			shopped: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
			},
			fav: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
			},
		},
		{ freezeTableName: true }
	);
	items.associate = function (models) {
		// We're saying that a items should belong to an Category
		// A items can't be created without an Category due to the foreign key constraint
		items.belongsTo(models.Category, {
			foreignKey: {
				allowNull: false,
			},
		});
	};
	items.associate = function (models) {
		// We're saying that a items should belong to an User
		// A items can't be created without an User due to the foreign key constraint
		items.belongsTo(models.User, {
			foreignKey: {
				allowNull: false,
			},
		});
	};
	return items;
};
