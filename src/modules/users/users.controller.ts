import type { Request, Response } from 'express';
import { User } from './users.entity.ts';

// Crear usuario
export const createUser = async (req: Request, res: Response) => {
  try {
    const user = new User(req.body);
    await user.save();
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
