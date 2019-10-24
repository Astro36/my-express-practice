import { NonFunctionProperties } from '../types';

export default class Book {
  id: string;

  title: string;

  author: string;

  static fromData(data: NonFunctionProperties<Book>): Book {
    return new Book(data.id, data.title, data.author);
  }

  constructor(id: string, title: string, author: string) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  toJSON(): NonFunctionProperties<Book> {
    return {
      id: this.id,
      title: this.title,
      author: this.author,
    };
  }
}
