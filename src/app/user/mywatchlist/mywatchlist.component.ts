import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/book/book';
import { BooksService } from 'src/app/book/books.service';
import { LoginService } from 'src/app/login.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-mywatchlist',
  templateUrl: './mywatchlist.component.html',
  styleUrls: ['./mywatchlist.component.css']
})
export class MywatchlistComponent implements OnInit {

  favouritebook:Array<Book>=[]
  books:any=[]
  watchlist:any;

  constructor(private logservice:LoginService,private bookservice:BooksService) {
    this.books=this.bookservice.listAllBooks();
    this.watchlist=this.logservice.activeUser.favouritebooks;
  }
    
  ngOnInit(): void {
     
      this.books.forEach((element:any)=>{
          console.log(element);
      })
     
  }

  



}
