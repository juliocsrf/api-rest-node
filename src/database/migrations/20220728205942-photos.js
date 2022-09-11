module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable(
            'photos',
            {
                id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                },
                fileName: {
                    type: Sequelize.STRING,
                    allowNull: false,
                    field: 'file_name',
                },
                fileOriginalName: {
                    type: Sequelize.STRING,
                    allowNull: false,
                    field: 'file_original_name',
                },
                studentId: {
                    type: Sequelize.INTEGER,
                    allowNUll: false,
                    references: {
                        model: 'students', key: 'id',
                    },
                    field: 'student_id',
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
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
        await queryInterface.dropTable('photos');
    },
};
