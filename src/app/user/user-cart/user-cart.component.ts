import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/book/book';
import { BooksService } from 'src/app/book/books.service';
import { LoginService } from 'src/app/login.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css']
})
export class UserCartComponent {

  books:Array<Book>=[];
  activeuser:User;
  cartBooks:Array<Book>=[];
  constructor(private logservice:LoginService,private bookservice:BooksService,private usrser:UserService,private rt:Router) {
    this.books=this.bookservice.listAllBooks();
    this.activeuser=this.logservice.activeUser 
  }
    
  ngOnInit(): void {
      if(this.books && this.activeuser){
        this.usrser.cartitem.forEach(f=>{
        this.books.forEach(b => {
          if(b.id==f){
            this.cartBooks.push(b);
          }
        });
      });
    }

    console.log(this.cartBooks);
  }
}
