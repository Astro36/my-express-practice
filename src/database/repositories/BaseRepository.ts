
import connector from '../connector';
import { NonFunctionProperties } from '../../types';

export default class BaseRepository<T> {
  columnName: string;

  models: any;

  constructor(columnName: string) {
    this.columnName = columnName;
    this.models = connector.get(this.columnName);
  }

  create(data: NonFunctionProperties<T>): void {
    this.models.push(data).write();
  }

  findById(id: number): NonFunctionProperties<T> {
    return this.models.find({ id }).value();
  }

  getAll(): Array<NonFunctionProperties<T>> {
    return this.models.value();
  }

  update(id: number, data: Partial<NonFunctionProperties<T>>): void {
    this.models.find({ id }).assign(data).write();
  }

  delete(id: number): void {
    this.models.remove({ id }).write();
  }
}
