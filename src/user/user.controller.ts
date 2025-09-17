import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { GetUsersDTO } from './dto/get-users.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  allUsers() {
    return this.userService.allUsers();
  }

  @Post()
  addUser(@Body() user: GetUsersDTO) {
    return this.userService.addUser(user);
  }

  @Put()
  updateUser(@Body() user: GetUsersDTO) {
    return this.userService.updateUser(user);
  }

  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.deleteUser(id);
  }

  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUserById(id);
  }
}
