import { Injectable } from '@nestjs/common';
import { GetUsersDTO } from './dto/get-users.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  //   private users: { id: number; firstname: string }[] = [];
  async getUserById(id: string) {
    const user = await this.usersRepository.find({
      where: {
        id,
      },
    });
    if (!user) {
      return { success: false, message: 'User not found' };
    }
    return { success: true, user };
  }

  async addUser(user: GetUsersDTO) {
    await this.usersRepository.save(user);
    return { success: true, user };
  }

  allUsers() {
    return this.usersRepository.find();
  }

  async updateUser(user: GetUsersDTO, id: string) {
    const result = await this.usersRepository.update(id, user);

    if (result.affected === 0) {
      return { success: false, message: 'User not found' };
    }

    const updatedUser = await this.usersRepository.findOneBy({ id });

    return { success: true, updatedUser };
  }

  async deleteUser(id: string) {
    const result = await this.usersRepository.delete(id);

    if (result.affected === 0) {
      return { success: false, message: 'User not found' };
    }

    return { success: true, message: 'User deleted successfully' };
  }
}
