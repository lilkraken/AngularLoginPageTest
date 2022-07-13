import { Component } from '@angular/core';
import { ValidateService } from '../Services/validate.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Username: string = '';
  Password: string = '';

  constructor(private validate:ValidateService) {}


  login() {
    //console.log(this.Username,this.Password);
    this.validate.Validate(this.Username, this.Password).subscribe(res => {
      console.log(res);
    })
    
    
  }
}
