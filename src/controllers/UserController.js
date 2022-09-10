import User from '../models/User';

class UserController {
    async store(req, res) {
        let newUser = null;
        let id;
        let name;
        let email = null;
        try {
            newUser = await User.create(
                { ...req.body, password_unhash: req.body.password ?? null },
            );

            id = newUser.id;
            name = newUser.name;
            email = newUser.email;
        } catch (e) {
            const response = { errors: null };
            if (e.name === 'SequelizeUniqueConstraintError') {
                response.errors = ['E-mail já existente'];
            } else {
                response.errors = e.errors.map((err) => err.message);
            }

            res.status(400).json(response);
            return;
        }

        res.json({ id, name, email });
    }

    async index(req, res) {
        try {
            const users = await User.findAll();
            return res.json(users);
        } catch (e) {
            return res.json(null);
        }
    }

    async show(req, res) {
        try {
            const { id } = req.params;
            const user = await User.findByPk(id);
            return res.json(user);
        } catch (e) {
            return res.json(null);
        }
    }

    async update(req, res) {
        try {
            const { userId } = req;
            const user = await User.findByPk(userId);

            if (!user) {
                return res.status(400).json({
                    errors: ['Usuário inválido'],
                });
            }

            const { name, email, password } = req.body;

            const dataUpdate = { name, email };
            if (password) {
                dataUpdate.password_unhash = password;
            }

            await user.update(dataUpdate);
            return res.json({ name, email });
        } catch (e) {
            const response = { errors: null };
            if (e.name === 'SequelizeUniqueConstraintError') {
                response.errors = ['E-mail já existente'];
            } else {
                response.errors = e.errors.map((err) => err.message);
            }

            return res.status(400).json(response);
        }
    }

    async destroy(req, res) {
        try {
            const user = await User.findByPk(req.userId);

            if (!user) {
                return res.status(400).json({
                    errors: ['Usuário inválido'],
                });
            }

            await user.destroy();
            return res.json(null);
        } catch (e) {
            const response = { errors: null };
            response.errors = e.errors.map((err) => err.message);

            return res.status(400).json(response);
        }
    }
}

export default new UserController();
