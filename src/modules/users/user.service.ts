import { User } from './users.entity.ts';
import type { IUser } from './users.entity.ts';

import type { CreateUserDto } from './dto/create-user.dto.ts';
import { emailQueue } from '../../config/bullmq.ts';

export class UserService {
  async createUser(data: CreateUserDto): Promise<IUser> {
    const user = new User(data);
    await emailQueue.add('sendEmail', {
      to: user.email,
      subject: 'Bienvenido a nuestra aplicación',
      html: '<h1>Bienvenido a nuestra aplicación</h1>',
    });
    return await user.save();
  }

  async getUsers(): Promise<IUser[]> {
    return await User.find();
  }

  async getUserById(id: string): Promise<IUser | null> {
    return await User.findById(id);
  }

  async updateUser(id: string, data: Partial<CreateUserDto>): Promise<IUser | null> {
    return await User.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteUser(id: string): Promise<IUser | null> {
    return await User.findByIdAndDelete(id);
  }
}
