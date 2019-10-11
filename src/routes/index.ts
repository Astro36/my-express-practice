import { Router } from 'express';
import auth from '../middlewares/auth';
import books from './books';

const router = Router();

router.use(auth);
router.use(books);

export default router;
