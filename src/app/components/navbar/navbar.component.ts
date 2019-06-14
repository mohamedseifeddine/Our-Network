import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
isOpen : boolean = false ;
isUser : boolean = false
  constructor(private as :AuthService, private router:Router) { }

  ngOnInit() {
    this.as.user.subscribe(user=>{
      if(user) this.isUser=true ;
      else this.isUser = false
    }
      )
  }
  toggleNavbar(){
    this.isOpen=!this.isOpen

  }
  logout(){
this.as.logout().then(()=>{
  this.router.navigate(['/'])
})
.catch(err=>console.log(err))
  }
}
