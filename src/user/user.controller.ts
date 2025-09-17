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
import { RequestIdService } from 'src/request-id-service/request-id.service';
import { CurrentUser } from 'src/decorators/current-user.decorator';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly requestIdService: RequestIdService,
  ) {}

  @Get('me')
  me(@CurrentUser() user: GetUsersDTO) {
    return user;
  }

  @Get()
  allUsers() {
    console.log(this.requestIdService.getRequestId());
    return this.userService.allUsers();
  }

  @Post()
  addUser(@Body() user: GetUsersDTO) {
    console.log(this.requestIdService.getRequestId());
    return this.userService.addUser(user);
  }

  @Put(':id')
  updateUser(@Body() user: GetUsersDTO, @Param('id') id: string) {
    console.log(this.requestIdService.getRequestId());
    return this.userService.updateUser(user, id);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    console.log(this.requestIdService.getRequestId());
    return this.userService.deleteUser(id);
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    console.log(this.requestIdService.getRequestId());
    return this.userService.getUserById(id);
  }
}
