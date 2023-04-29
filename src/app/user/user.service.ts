import { LocalizedString } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../book/books.service';
import { LoginService } from '../login.service';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  curntUser!:any;
  allUser:Array<User>=[{id:1001,name:"Rahul",favouritebooks:[2,4,5],password:"Rahul232"},{id:1002,name:"Smit",favouritebooks:[5,6,7,8],password:"Smit100"},{id:1003,name:"Arth",favouritebooks:[9,5,8,1],password:"Arth3232"},{id:1004,name:"Mihir",favouritebooks:[1,2,4,7,9],password:"Mihir1221"}];

  constructor(private rot:Router) {
  }

    get listUser(){
      return this.allUser;
    }

  addFavrite(userId:number,bookId:number){
    const user=this.allUser.find(u=>u.id==userId);
    user?.favouritebooks.push(bookId)
    console.log(user)
  }

  removeFavrite(userId:number,bookId:number){
    this.allUser.forEach(element=>{
      if(element.id==userId){
        element.favouritebooks=element.favouritebooks.filter(i=>i!=bookId);
      }
    })
  }
}
