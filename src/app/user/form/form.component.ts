import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  name!:string;
  password!:string;

  constructor(private loginserv:LoginService,private rt:Router){

  }
  
  isuser(){
    this.loginserv.getLogin(this.name,this.password);
    if(this.loginserv.valid){
      this.rt.navigate(['books']);
    }
  } 

}
