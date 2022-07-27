const bcryptjs = require('bcryptjs');

module.exports = {
    async up(queryInterface) {
        await queryInterface.bulkInsert(
            'users',
            [
                {
                    name: 'Maria Rosário',
                    email: 'maria.rosario@email.com',
                    password: await bcryptjs.hash('123456', 8),
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    name: 'Marcelo Gomes',
                    email: 'marcelo.gomes@email.com',
                    password: await bcryptjs.hash('123456', 8),
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    name: 'Ana Cecíclia',
                    email: 'ana.cecilia@email.com',
                    password: await bcryptjs.hash('123456', 8),
                    created_at: new Date(),
                    updated_at: new Date(),
                },
            ],
        );
    },
};
