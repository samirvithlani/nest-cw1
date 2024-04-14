import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  users:any = [
    {
      id: 1,
      name: 'John Doe',
      age: 25
    },
    {
      id: 2,
      name: 'Sachin Tendulkar',
      age: 45
    }
  ]

  getHello(): string {
    return 'Hello World!';
  }

  getAllUsers():any{

      return this.users;
  }

  addUser(user:any):any{

    this.users.push(user);
    return this.users;

  }

}
