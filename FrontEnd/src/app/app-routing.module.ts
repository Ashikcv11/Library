import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AddBookComponent } from './add-book/add-book.component';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateBookComponent } from './update-book/update-book.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'add',component:AddBookComponent, canActivate:[AuthGuard]},
  {path:'books',component:BooksComponent},
  {path:'update',component:UpdateBookComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
