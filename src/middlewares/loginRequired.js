import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({
            errors: ['Login required'],
        });
    }

    const [, token] = authorization.split(' ');

    try {
        const dados = jwt.verify(token, process.env.TOKEN_SECRET);
        const { id, email } = dados;

        const user = await User.findOne({ id, email });

        if (!user) {
            return res.status(401).json({
                errors: ['Invalid token'],
            });
        }

        req.userId = id;
        req.userEmail = email;
        return next();
    } catch (e) {
        console.log(e.message);
        return res.status(401).json({
            errors: ['Invalid token'],
        });
    }
};
