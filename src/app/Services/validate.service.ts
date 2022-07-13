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
        data.next('You are logged In!')
        
      } else {
        data.next('Credentials did not match, Please check your Username and Password!')
        
      }

    })

  }


}
