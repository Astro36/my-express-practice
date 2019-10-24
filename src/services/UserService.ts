import UserRepository from '../database/repositories/UserRepository';
import User from '../models/User';
import { NonFunctionProperties } from '../types';

export default class UserService {
  userRepository = new UserRepository();

  create(id: string, name: string, password: string, role: string): User {
    const user = new User(id, name, password, role);
    this.userRepository.create(user.toJSON());
    return user;
  }

  findById(id: string): User | null {
    const data = this.userRepository.findById(id);
    if (data) {
      const user = User.fromData(data);
      return user;
    }
    return null;
  }

  getAll(): Array<User> {
    const data = this.userRepository.getAll();
    const users = data.map(User.fromData);
    return users;
  }

  update(id: string, newData: Partial<NonFunctionProperties<User>>): void {
    const data = this.userRepository.findById(id);
    if (data) {
      const user = User.fromData(data);
      Object.assign(user, newData);
      this.userRepository.update(id, user.toJSON());
    }
  }

  delete(id: string): void {
    this.userRepository.delete(id);
  }
}
