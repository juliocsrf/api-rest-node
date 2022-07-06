module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable(
            'students',
            {
                id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                },
                name: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                lastName: {
                    type: Sequelize.STRING,
                    allowNull: false,
                    field: 'last_name',
                },
                email: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                age: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },
                weight: {
                    type: Sequelize.FLOAT,
                    allowNull: false,
                },
                height: {
                    type: Sequelize.FLOAT,
                    allowNull: false,
                },
                createdAt: {
                    type: Sequelize.DATE,
                    allowNull: false,
                    field: 'created_at',
                },
                updatedAt: {
                    type: Sequelize.DATE,
                    allowNull: false,
                    field: 'updated_at',
                },
            },
        );
    },

    async down(queryInterface) {
        await queryInterface.dropTable('students');
    },
};
