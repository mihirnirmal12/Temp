import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user-data/user.component';
import { FormComponent } from './user/form/form.component';
import { FormsModule } from '@angular/forms';
import { BookComponent } from './book/book/book.component';
import { HomeComponent } from './home/home.component';
import { BookDetailsComponent } from './book/book-details/book-details.component';
import { MywatchlistComponent } from './user/mywatchlist/mywatchlist.component';
import { UserCartComponent } from './user/user-cart/user-cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    FormComponent,
    BookComponent,
    HomeComponent,
    BookDetailsComponent,
    MywatchlistComponent,
    UserCartComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
