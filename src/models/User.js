import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model {
    static init(sequelize) {
        super.init({
            name: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 255],
                        msg: 'Campo nome deve ter entre 3 e 255 caracteres',
                    },
                },
            },
            email: {
                type: Sequelize.STRING,
                defaultValue: '',
                unique: {
                    msg: 'E-mail já existente',
                },
                validate: {
                    isEmail: {
                        msg: 'E-mail inválido',
                    },
                },
            },
            password: {
                type: Sequelize.STRING,
                defaultValue: '',
            },
            password_unhash: {
                type: Sequelize.VIRTUAL,
                defaultValue: '',
                validate: {
                    len: {
                        args: [6, 50],
                        msg: 'Senha deve ter entre 6 e 50 caracteres',
                    },
                },
            },
        }, { sequelize });

        this.addHook('beforeSave', async (user) => {
            if (user.password_unhash) {
                user.password = await bcryptjs.hash(user.password_unhash, 8);
            }
        });
        return this;
    }
}
