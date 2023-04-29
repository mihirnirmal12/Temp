import { Injectable, ɵɵsetComponentScope } from '@angular/core';
import { User } from './user/user';
import { UserService } from './user/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
  userData:Array<User>=[]
  valid=false
  activeUser:any;
  
  
  constructor(private us:UserService) { 
    this.userData=this.us.listUser;
  }


  getLogin(username:string,password:string){
    const data=this.userData.find(l=>l.name==username&&l.password==password)
    if(data){
      this.valid=true;
      this.activeUser=data;
      console.log(this.valid)
    }
    else{
      this.activeUser=false;
    } 
   }

   logout() {
    this.valid=false;
    this.activeUser=""
   }
 
}
