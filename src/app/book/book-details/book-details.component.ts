import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { LoginService } from 'src/app/login.service';
import { User } from 'src/app/user/user';
import { UserService } from 'src/app/user/user.service';
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
  user!:User;
  constructor(private activeroute:ActivatedRoute,private bookserv:BooksService,private usrser:UserService,private logserv:LoginService,private rt:Router){
    this.bookdata=this.bookserv.listAllBooks();
    this.user=this.logserv.activeUser;
  }  

  ngOnInit(): void {
    this.activeroute.params.subscribe((b:any)=>{
      this.book = this.bookdata.find(x=>x.id==b.id);
    })

  }


  likebook(bid:number){
    if(this.user)
    {   
       this.usrser.addFavrite(this.user.id,bid);
       this.bookserv.addlike(bid);
    }
    else
    {
      this.rt.navigate(['signup']); 
    }
  }

  unlikebook(bid:number){
    if(this.user){
        this.usrser.removeFavrite(this.user.id,bid);
        this.bookserv.removelike(bid);
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

  addCart(id:number){
    this.usrser.addCart(id);
  }
}

