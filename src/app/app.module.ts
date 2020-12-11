import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LogincompComponent } from './logincomp/logincomp.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

import {NgxPaginationModule} from 'ngx-pagination';
import { BestComponent } from './best/best.component';
import { SearchService } from './search.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { LoginService } from './login.service';
import {ReactiveFormsModule} from '@angular/forms';
import { MylogComponent } from './mylog/mylog.component';
import { AuthService } from './auth.service';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';

import {  MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LibrarianaccountComponent } from './librarianaccount/librarianaccount.component';
import { UpdateComponent } from './update/update.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LogincompComponent,
    HomeComponent,
    ContactComponent,
    
    
    
    BestComponent,
   
    
    
    MylogComponent,
   
    
    
    LibrarianaccountComponent,
   
    
    
    UpdateComponent,
   
    
    
    AddbookComponent,
   
    
    
    AboutComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,NgxPaginationModule,ReactiveFormsModule,MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule, MatToolbarModule,FlexLayoutModule,
 BrowserAnimationsModule 
   
  ],
  providers: [SearchService,LoginService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
