import Sequelize, { Model } from 'sequelize';

export default class Student extends Model {
    static init(sequelize) {
        super.init({
            name: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 255],
                        msg: 'Nome deve ter entre 3 e 255 caracteres',
                    },
                },
            },
            lastName: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 255],
                        msg: 'Sobrenome deve ter entre 3 e 255 caracteres',
                    },
                },
            },
            email: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    isEmail: {
                        msg: 'E-mail inválido',
                    },
                },
            },
            age: {
                type: Sequelize.INTEGER,
                defaultValue: '',
                validate: {
                    isInt: {
                        msg: 'A idade deve ser um número inteiro',
                    },
                },
            },
            weight: {
                type: Sequelize.FLOAT,
                defaultValue: '',
                validate: {
                    isFloat: {
                        msg: 'O peso deve ser um número inteiro ou de ponto flutuante',
                    },
                },
            },
            height: {
                type: Sequelize.FLOAT,
                defaultValue: '',
                validate: {
                    isFloat: {
                        msg: 'A altura deve ser um número inteiro ou de ponto flutuante',
                    },
                },
            },
        }, { sequelize });
        return this;
    }
}
