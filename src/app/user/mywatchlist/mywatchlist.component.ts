import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/book/book';
import { BooksService } from 'src/app/book/books.service';
import { LoginService } from 'src/app/login.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-mywatchlist',
  templateUrl: './mywatchlist.component.html',
  styleUrls: ['./mywatchlist.component.css']
})
export class MywatchlistComponent implements OnInit {

  favouritebook:Array<Book>=[]
  books:Array<Book>=[]
  activeuser:User;

  constructor(private logservice:LoginService,private bookservice:BooksService,private usrser:UserService,private rt:Router) {
    this.books=this.bookservice.listAllBooks();
    this.activeuser=this.logservice.activeUser 
  }
    
  ngOnInit(): void {
    if(this.books && this.activeuser){
      this.activeuser.favouritebooks.forEach(f=>{
      this.books.forEach(b => {
        if(b.id==f){
          this.favouritebook.push(b);
        }
      });
    });
   }    

  }
  
 
 
  likebook(bid:number){
       this.usrser.addFavrite(this.activeuser.id,bid);
       this.bookservice.addlike(bid);
  }

  unlikebook(bid:number){
        this.favouritebook=this.favouritebook.filter(x=>x.id!=bid);
        this.usrser.removeFavrite(this.activeuser.id,bid);
        this.bookservice.removelike(bid);
  }

  islike(bid:number){
    if(this.logservice.valid){
       var bol=this.activeuser.favouritebooks.includes(bid);
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



