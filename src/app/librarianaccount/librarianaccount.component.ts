import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/users';
import { LoginService } from '../login.service';
import { SearchService } from '../search.service';
import { User } from '../user';

@Component({
  selector: 'app-librarianaccount',
  templateUrl: './librarianaccount.component.html',
  styleUrls: ['./librarianaccount.component.scss']
})
export class LibrarianaccountComponent implements OnInit {

  csers:Users[]=[];
  Book_title:any;
  Book_auther:any;
NumberOfBooks :any;
username:User[];
id:any;
  p:number = 1;
  constructor(public rs: SearchService,private router:Router) { }
  
  ngOnInit(): void {
    this.rs.getUsers().subscribe((response)=>{
      this.csers=response;
    });

    this.rs.getDetails().subscribe(data => {
      console.log(data);
      this.csers=data;
     })
  }
  Search(){
    if(this.Book_title == "")
    {
      this.ngOnInit();
    }else{
      this.csers =this.csers.filter(res =>{
        return res.Book_title.toLocaleLowerCase().match(this.Book_title.toLocaleLowerCase());
      })
    }
  }

  deleteRow(val){
    if(confirm("Are you sure want to delete?")){
    this.rs.deleteUser(val).subscribe(data =>{
    });
    this.rs.getUsers().subscribe((response) => {
      this.csers = response;
    })}
  }
 
  update(id){
    this.router.navigate(['/update',id]);
  }
  add(user){
    this.router.navigate(['/addbook',user]);
  }
//   get(id){
//     this.router.navigate(['/getbook',id]);
//     // this.rs.getUsers().subscribe((response) => {
//     // this.users = response;
//   //});
// }
 
logout(){
  

  if(window.confirm('Are you sure you want to logout?')){​​​​​​​​
  this.router.navigate(['/home']);
    }​​​​​​​​
  
  
 
}

getData(user):void{
  this.Book_title = user.Book_title;
  this.Book_auther = user.Book_auther;
  this.NumberOfBooks = user.NumberOfBooks;
  this.id = user.id;
 
  }
}