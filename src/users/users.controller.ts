import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers(): string[] {
    return this.usersService.getAllUsers();
  }

  @Get('comments')
  getAllComments(): string[] {
    return ['Comment 1', 'Comment 2', 'Comment 3'];
  }

  @Get(':id')
  findOneUser(@Param('id') id: string) {
    return { id };
  }

  @Post()
  addNewUser(@Body() userData: {}) {
    return userData;
  }

  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() userData: {}) {
    return { id, ...userData };
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return { id };
  }
}
