import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Temp';
 
  constructor(private log:LoginService,private rt:Router){
   
  }
  

  get active():boolean{
    return this.log.valid;
  }

  signout(){
    this.rt.navigate(['home'])
    this.log.logout();
  }
}
