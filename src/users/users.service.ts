import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getAllUsers(): string[] {
    return ['John', 'Doe', 'Alice'];
  }
}
