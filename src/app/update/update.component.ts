import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/users';
import { LoginService } from '../login.service';
import { SearchService } from '../search.service';
import { Ufetch } from '../ufetch';
import { User } from '../user';
import { Userfetch } from '../userfetch';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  constructor(public route:ActivatedRoute,public router:Router,public rs:SearchService) { }
  val:any;
  users: Users[]=[];
  user:Ufetch;
  ngOnInit(): void {
    let sub=this.route.params.subscribe(params=>{
      this.val=params['id'];
    });
    console.log("Book_id: "+this.val);
    this.rs.getUpdateUser(this.val).subscribe(data=>{
    this.user=data;
    })
  }
  update(){
    this.rs.updateUser(this.user).subscribe(data=>{
    });
    this.getUsers();
    this.router.navigate(['home/librarianaccount']);
  }
  getUsers(){
    this.rs.getUsers().subscribe((response)=>{
      this.users=response;
    });
  }

}
