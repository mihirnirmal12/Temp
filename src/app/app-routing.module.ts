import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthenticationGuard } from './authentication.guard';
import { BookDetailsComponent } from './book/book-details/book-details.component';
import { BookComponent } from './book/book/book.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './user/form/form.component';
import { MywatchlistComponent } from './user/mywatchlist/mywatchlist.component';
import { UserComponent } from './user/user-data/user.component';

const routes: Routes = [{path:"signup",component:FormComponent},{path:"user",component:UserComponent},{path:" ",component:FormComponent},{path:"admin",component:AdminComponent},{path:"books",component:BookComponent},{path:"details/:id",component:BookDetailsComponent},{path:"Watchlist",component:MywatchlistComponent},{path:"home",component:HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
