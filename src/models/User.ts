import { NonFunctionProperties } from '../types';

export default class User {
  id: string;

  name: string;

  password: string;

  role: string;

  static fromData(data: NonFunctionProperties<User>): User {
    return new User(data.id, data.name, data.password, data.role);
  }

  constructor(id: string, name: string, password: string, role: string) {
    this.id = id;
    this.name = name;
    this.password = password;
    this.role = role;
  }

  toJSON(): NonFunctionProperties<User> {
    return {
      id: this.id,
      name: this.name,
      password: this.password,
      role: this.role,
    };
  }
}
