import { Response, Request } from 'express';
import UserService from '../services/UserService';
import { filterObject } from '../utils';

export const createUser = (req: Request, res: Response): void => {
  const {
    id, name, password, role,
  } = req.body;
  const userService = new UserService();
  const user = userService.create(id, name, password, role);
  res.send({
    data: user.toJSON(),
  });
};

export const getUser = (req: Request, res: Response): void => {
  const id = req.params.user;
  const userService = new UserService();
  const user = userService.findById(id);
  if (user) {
    res.send({
      data: user,
    });
  } else {
    res.status(404).send({ message: 'Cannot find the user' });
  }
};

export const getUsers = (req: Request, res: Response): void => {
  const userService = new UserService();
  const users = userService.getAll();
  res.send({
    data: users,
  });
};

export const updateUser = (req: Request, res: Response): void => {
  const id = req.params.user;
  const userService = new UserService();
  const payload = filterObject(req.body, ['name', 'password', 'role']);
  userService.update(id, payload); // if input is unavailable user?
  res.send({
    data: 'success',
  });
};

export const deleteUser = (req: Request, res: Response): void => {
  const id = req.params.user;
  const userService = new UserService();
  userService.delete(id); // if input is unavailable user?
  res.send({
    data: 'success',
  });
};
