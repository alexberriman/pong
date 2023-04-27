import { Router } from 'express';
import {
  createUser,
  getUser,
  updateUser,
  deleteUser,
  listUsers,
} from '../handlers';

export const userRoutes = Router();

userRoutes.get('/', listUsers);
userRoutes.post('/', createUser);
userRoutes.get('/:userId', getUser);
userRoutes.put('/:userId', updateUser);
userRoutes.delete('/:userId', deleteUser);
