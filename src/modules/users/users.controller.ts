import type { Request, Response } from 'express';
import { User } from './users.entity.ts';
import type { CreateUserDto } from './dto/create-user.dto.ts';
import { UserService } from './user.service.ts';

const userService = new UserService();

// Crear usuario
export const createUser = async (req: Request, res: Response) => {
  try {
    const dto: CreateUserDto = req.body;
    const user = await userService.createUser(dto);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error creando usuario', error });
  }
};

// Obtener todos los usuarios
export const getUsers = async (_: Request, res: Response) => {
  const users = await User.find();
  res.json(users);
};

// Obtener un usuario por ID
export const getUserById = async (req: Request, res: Response) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
  res.json(user);
};
