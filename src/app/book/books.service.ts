import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  bookData:Array<Book>= [
      {
        "id":1,
        "title": "Eloquent JavaScript, Second Edition",
        "subtitle": "A Modern Introduction to Programming",
        "author": "Marijn Haverbeke",
        "published": "2014-12-14T00:00:00.000Z",
        "publisher": "No Starch Press",
        "pages": 472,
        "likes":120,
        "price":340,
        "image":"https://eloquentjavascript.net/2nd_edition/img/cover.png",
        "description": "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications."
      },
      {
        "id":2,
        "title": "Learning JavaScript Design Patterns",
        "subtitle": "A JavaScript and jQuery Developer's Guide",
        "author": "Addy Osmani",
        "published": "2012-07-01T00:00:00.000Z",
        "publisher": "O'Reilly Media",
        "pages": 254,
        "likes":100,
        "price":300,
        "image":"https://tse2.mm.bing.net/th/id/OIP.1AfPLD59sNgck5zlK2VQgAHaJt?pid=ImgDet&rs=1",
        "description": "With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you."
      },
      {
        "id":3,
        "title": "Speaking JavaScript",
        "subtitle": "An In-Depth Guide for Programmers",
        "author": "Axel Rauschmayer",
        "published": "2014-02-01T00:00:00.000Z",
        "publisher": "O'Reilly Media",
        "pages": 460,
        "likes":168,
        "price":500,
        "image":"https://i.pinimg.com/originals/b4/b1/a1/b4b1a119009dcbf08f2acfe811dfe972.jpg",
        "description": "Like it or not, JavaScript is everywhere these days-from browser to server to mobile-and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position."
      },
      {
        "id":4,
        "title": "Programming JavaScript Applications",
        "subtitle": "Robust Web Architecture with Node, HTML5, and Modern JS Libraries",
        "author": "Eric Elliott",
        "published": "2014-07-01T00:00:00.000Z",
        "publisher": "O'Reilly Media",
        "pages": 254,
        "likes":95,
        "price":269.99,
        "image":"https://uploads-ssl.webflow.com/5f280c5b57d2edfcbbb057ea/5f2b4486fce6b7a0b0462b21_11.jpg",
        "description": "Take advantage of JavaScript's power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that's easier-yes, easier-to work with as your code base grows."
      },
      {
        "id":5,
        "title": "Understanding ECMAScript 6",
        "subtitle": "The Definitive Guide for JavaScript Developers",
        "author": "Nicholas C. Zakas",
        "published": "2016-09-03T00:00:00.000Z",
        "publisher": "No Starch Press",
        "pages": 352,
        "likes":36,
        "price":440,
        "image":"https://tse2.mm.bing.net/th/id/OIP.jRpSe0q-Fip7kvcnnt1lIgHaJz?pid=ImgDet&rs=1",
        "description": "ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript."
      },
      {
        "id":6,
        "title": "You Don't Know JS",
        "subtitle": "ES6 & Beyond",
        "author": "Kyle Simpson",
        "published": "2015-12-27T00:00:00.000Z",
        "publisher": "O'Reilly Media",
        "pages": 278,
        "likes":89,
        "price":230,
        "image":"https://tse3.mm.bing.net/th/id/OIP.3XOzxGB0bCTxw1SRUdAMwgAAAA?pid=ImgDet&w=300&h=450&rs=1",
        "description": "No matter how much experience you have with JavaScript, odds are you don’t fully understand the language. As part of the \"You Don’t Know JS\" series, this compact guide focuses on new features available in ECMAScript 6 (ES6), the latest version of the standard upon which JavaScript is built.",
      },
      {
        "id":7,
        "title": "Git Pocket Guide",
        "subtitle": "A Working Introduction",
        "author": "Richard E. Silverman",
        "published": "2013-08-02T00:00:00.000Z",
        "publisher": "O'Reilly Media",
        "pages": 234,
        "likes":56,
        "price":630,
        "image":"https://tse1.mm.bing.net/th/id/OIP.eswNWdwE_lKHhrdJbDxm-QHaMN?pid=ImgDet&rs=1",
        "description": "This pocket guide is the perfect on-the-job companion to Git, the distributed version control system. It provides a compact, readable introduction to Git for new users, as well as a reference to common commands and procedures for those of you with Git experience."
      },
      {
        "id":8,
        "title": "Designing Evolvable Web APIs with ASP.NET",
        "subtitle": "Harnessing the Power of the Web",
        "author": "Glenn Block, et al.",
        "published": "2014-04-07T00:00:00.000Z",
        "publisher": "O'Reilly Media",
        "pages": 538,
        "likes":150,
        "price":460,
        "image":"https://th.bing.com/th/id/R.1bb8fd7c7b3e99f2e7d72dfdf0c2fb69?rik=6d%2fiBeVbUGTQjw&riu=http%3a%2f%2fwww.e-booksdirectory.com%2fimglrg%2f8116.jpg&ehk=J4c32knG3I6K71VFFaYibwETNagyRDDwUx%2bv5%2ffvSVU%3d&risl=&pid=ImgRaw&r=0",
        "description": "Design and build Web APIs for a broad range of clients—including browsers and mobile devices—that can adapt to change over time. This practical, hands-on guide takes you through the theory and tools you need to build evolvable HTTP services with Microsoft’s ASP.NET Web API framework. In the process, you’ll learn how design and implement a real-world Web API."
      }
    ]

  constructor() { }


  listAllBooks(){
    return this.bookData;
  }

  addlike(id:number){
    this.bookData.forEach(book=>{
      if(book.id==id){
        book.likes+=1;
      }
    })
  }

  removelike(id:number){
    this.bookData.forEach(book=>{
      if(book.id==id){
        book.likes-=1;
      }
    })
  }
}
