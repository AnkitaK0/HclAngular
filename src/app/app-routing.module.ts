import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LogincompComponent } from './logincomp/logincomp.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MylogComponent } from './mylog/mylog.component';
import { BestComponent } from './best/best.component';
import { LibrarianaccountComponent } from './librarianaccount/librarianaccount.component';
import { UpdateComponent } from './update/update.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AboutComponent } from './about/about.component';
const routes: Routes = [{path:'',redirectTo:'/home',pathMatch:'full'},
  { path: 'home/register', component: RegisterComponent},{ path: 'home/logincomp', component: LogincompComponent},
  { path: 'home', component: HomeComponent},{ path: 'home/contact', component: ContactComponent},
  { path: 'home/best', component: BestComponent},{ path: 'home/mylog', component: MylogComponent}, 
  { path: 'home/librarianaccount', component: LibrarianaccountComponent},
  { path: 'addbook', component: AddbookComponent},
  { path: 'update/:id', component: UpdateComponent},{ path: 'home/about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
