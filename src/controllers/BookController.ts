import { Response, Request } from 'express';
import BookService from '../services/BookService';

export const createBook = (req: Request, res: Response): void => {
  const bookService = new BookService();
  const book = bookService.create(req.body.id, req.body.title, req.body.author);
  res.send({
    data: book.toJSON(),
  });
};

export const getBooks = (req: Request, res: Response): void => {
  const bookService = new BookService();
  const books = bookService.getAll();
  res.send({
    data: books,
  });
};

export const getBook = (req: Request, res: Response): void => {
  const bookService = new BookService();
  const book = bookService.findById(Number(req.params.book));
  res.send({
    data: book,
  });
};

export const updateBook = (req: Request, res: Response): void => {
  const bookService = new BookService();
  const payload = {
    title: req.body.title,
    description: req.body.description,
    isDone: req.body.isDone,
  };
  const book = bookService.update(Number(req.params.book), payload);
  res.send({
    data: book,
  });
};

export const deleteBook = (req: Request, res: Response): void => {
  const bookService = new BookService();
  bookService.delete(Number(req.params.book));
  res.send({
    data: 'success',
  });
};
