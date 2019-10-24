import { Router } from 'express';
import * as UserController from '../controllers/UserController';

const router = Router();

router.get('', UserController.getUsers);
router.get('/:user', UserController.getUser);
router.post('', UserController.createUser);
router.put('/:user', UserController.updateUser);
router.delete('/:user', UserController.deleteUser);

export default router;
