import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Book } from '../book';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit{
  bookdata:Array<Book>=[]
  book!:any;
  constructor(private activeroute:ActivatedRoute,private bookserv:BooksService){
    this.bookdata=this.bookserv.listAllBooks();
  }  

  ngOnInit(): void {
    this.activeroute.params.subscribe((b:any)=>{
      this.book = this.bookdata.find(x=>x.id==b.id);
    })
  }

  

  

}
