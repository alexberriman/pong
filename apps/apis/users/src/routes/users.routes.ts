import { Router } from 'express';
import {
  createUser,
  getUser,
  getUserProfilePicture,
  updateUser,
  deleteUser,
  listUsers,
} from '../handlers';

export const userRoutes = Router();

userRoutes.get('/', listUsers);
userRoutes.post('/', createUser);
userRoutes.get('/:userId', getUser);
userRoutes.get('/:userId/profile-picture', getUserProfilePicture);
userRoutes.put('/:userId', updateUser);
userRoutes.delete('/:userId', deleteUser);
