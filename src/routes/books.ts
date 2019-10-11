import { Router } from 'express';
import * as BookController from '../controllers/BookController';

const router = Router();

router.get('', BookController.getBooks);
router.get('/:book', BookController.getBook);
router.post('', BookController.createBook);
router.put('/:book', BookController.updateBook);
router.delete('/:book', BookController.deleteBook);

export default router;
