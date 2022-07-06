import User from '../models/User';

class UserController {
    async store(req, res) {
        let newUser = null;
        try {
            newUser = await User.create(
                { ...req.body, password_unhash: req.body.password ?? null },
            );
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

        res.json({
            user: newUser,
        });
    }
}

export default new UserController();
