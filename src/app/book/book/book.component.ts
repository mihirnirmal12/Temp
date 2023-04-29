import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';
import { User } from 'src/app/user/user';
import { UserService } from 'src/app/user/user.service';
import { Book } from '../book';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  books:Array<Book>=[]
  user!:any;

  constructor(private bs:BooksService,private usrser:UserService,private logserv:LoginService,private rt:Router,private activert:ActivatedRoute){
    this.books=this.bs.listAllBooks();
    this.user=this.logserv.activeUser;
  }

  likebook(bid:number){
    if(this.user)
    {   
       this.usrser.addFavrite(this.user.id,bid);
       this.bs.addlike(bid);
    }
    else
    {
      this.rt.navigate(['signup']); 
    }
    
  }

  unlikebook(bid:number){
    if(this.user){
        this.usrser.removeFavrite(this.user.id,bid);
        this.bs.removelike(bid);
    }
    else{
      this.rt.navigate(['signup']);
    }
  }

  islike(bid:number){
    if(this.logserv.valid){
       var bol=this.user.favouritebooks.includes(bid);
       return bol;
    }
    else{
      return false;
    }
  }  

    getDetails(id:number,name:string){
      this.rt.navigate(['details',id],{queryParams:{title:name}})
    }

}
