import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/users';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-best',
  templateUrl: './best.component.html',
  styleUrls: ['./best.component.scss']
})
export class BestComponent implements OnInit {

  csers:Users[]=[];
  Book_title:any;
  p:number = 1;
  constructor(public rs: SearchService,private router:Router) { }
  
  ngOnInit(): void {
    this.rs.getUsers().subscribe((response)=>{
      this.csers=response;
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
  logout(){
    if(window.confirm('Are you sure you want to logout?')){​​​​​​​​
this.router.navigate(['/home']);
  }​​​​​​​​
}
  }
