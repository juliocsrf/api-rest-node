import Sequelize, { Model } from 'sequelize';

export default class Photo extends Model {
    static init(sequelize) {
        super.init({
            fileName: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 255],
                        msg: 'Nome do arquivo deve ter entre 3 e 255 caracteres',
                    },
                },
            },
            fileOriginalName: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 255],
                        msg: 'Nome do arquivo deve ter entre 3 e 255 caracteres',
                    },
                },
            },
            studentId: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
        }, { sequelize });

        return this;
    }

    static associate(models) {
        this.belongsTo(models.Student, {
            foreignKey: 'student_id',
            targetKey: 'id',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            as: 'student',
        });
    }
}
