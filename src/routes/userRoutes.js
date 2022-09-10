import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', loginRequired, userController.index);
router.get('/:id', userController.show);

router.post('/', userController.store);
router.put('/:id', loginRequired, userController.update);
router.delete('/', loginRequired, userController.destroy);

export default router;
