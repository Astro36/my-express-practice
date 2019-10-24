import { Router } from 'express';
import auth from '../middlewares/auth';
import books from './books';
import users from './users';

const router = Router();

router.use(auth);
router.use('/books', books);
router.use('/users', users);

export default router;
