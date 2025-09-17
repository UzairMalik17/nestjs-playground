import { Injectable } from '@nestjs/common';
import { GetUsersDTO } from './dto/get-users.dto';

@Injectable()
export class UserService {
  private users: { id: number; firstname: string }[] = [];

  getUserById(id: number) {
    const user = this.users.find((u) => u.id === id);
    if (!user) {
      return { success: false, message: 'User not found' };
    }
    return { success: true, user };
  }

  addUser(user: GetUsersDTO) {
    const exists = this.users.find((u) => u.id === user.id);
    if (exists) {
      return { success: false, message: 'User already exists' };
    }
    this.users.push(user);
    return { success: true, user };
  }

  allUsers() {
    return this.users;
  }

  updateUser(user: GetUsersDTO) {
    const found = this.users.find((u) => u.id === user.id);

    if (!found) {
      return { success: false, message: 'User not found' };
    }

    found.firstname = user.firstname;
    return { success: true, updatedUser: found };
  }

  deleteUser(id: number) {
    const initialLength = this.users.length;
    this.users = this.users.filter((u) => u.id !== id);

    if (this.users.length === initialLength) {
      return { success: false, message: 'User not found' };
    }

    return { success: true, users: this.users };
  }
}
