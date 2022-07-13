import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  // ValidateFields(username: string, pswd: string) {
  //   if (username == 'tester' && pswd == 'Password1') {
  //     return 'User logged In'
  //   } else {
  //     return 'Login Failed'
  //   }
  // }

  Validate(username: string, pswd: string) {
    return  new Observable((data) => {

      if (username == 'tester' && pswd == 'Password1') {
        data.next('User logged In')
        
      } else {
        data.next('Login Failed')
        
      }

    })

  }


}
