import { Injectable } from '@angular/core';
import { data, User } from './data';

@Injectable({
  providedIn: 'root' //available in entire application 
})

export class UserService {
  private userData: User[] = data;

  constructor() {}

  getUserData(): Promise<User[]> {
    return new Promise((resolve) => {
      resolve(this.userData);
    });
  }
}
