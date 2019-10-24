import { Response, Request } from 'express';
import BookService from '../services/BookService';
import { filterObject } from '../utils';

export const createBook = (req: Request, res: Response): void => {
  const { id, title, author } = req.body;
  const bookService = new BookService();
  const book = bookService.create(String(id), String(title), String(author)); // check here?
  res.send({
    data: book.toJSON(),
  });
};

export const getBook = (req: Request, res: Response): void => {
  const id = req.params.book;
  const bookService = new BookService();
  const book = bookService.findById(id);
  if (book) {
    res.send({
      data: book,
    });
  } else {
    res.status(404).send({ message: 'Cannot find the book' });
  }
};

export const getBooks = (req: Request, res: Response): void => {
  const bookService = new BookService();
  const books = bookService.getAll();
  res.send({
    data: books,
  });
};

export const updateBook = (req: Request, res: Response): void => {
  const id = req.params.book;
  const bookService = new BookService();
  const payload = filterObject(req.body, ['title', 'author']);
  bookService.update(id, payload); // if input is an unavailable book?
  res.send({
    data: 'success',
  });
};

export const deleteBook = (req: Request, res: Response): void => {
  const id = req.params.book;
  const bookService = new BookService();
  bookService.delete(id); // if input is an unavailable book?
  res.send({
    data: 'success',
  });
};
