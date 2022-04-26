import { Injectable } from '@angular/core';
import { GenericCrudBehaviorService } from '../generic-crud-behavior.service';
import { User } from './user.interfase';

const url = 'https://gorest.co.in/public/v2/users';

@Injectable()
export class UserBehaviorService extends GenericCrudBehaviorService<User> {

  constructor() {
    super(url);
  }

}