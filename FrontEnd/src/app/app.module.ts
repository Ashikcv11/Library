import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { AddBookComponent } from './add-book/add-book.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { LibraryService } from './library.service';
import { SignupComponent } from './signup/signup.component';
import { TokenInterceptorService } from './token-interceptor.service';
// import { MDDBBootstrapModuel } from 'angular-bootstrap-md'
import { MDBBootstrapModule } from 'angular-bootstrap-md'

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    AddBookComponent,
    HeaderComponent,
    HomeComponent,
    UpdateBookComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot()
  ],

  schemas: [NO_ERRORS_SCHEMA],
  providers: [LibraryService,AuthService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
