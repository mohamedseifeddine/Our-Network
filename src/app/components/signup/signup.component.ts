import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service'
import { from } from 'rxjs';
import { User } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {
  errorMessage:string=''

  constructor(private as :AuthService , private us : UserService , private router:Router) { }

  ngOnInit() {
  }
signup(form){
let data : User = form.value
this.as.signup(data.email,data.password)
.then(result=>{
  this.errorMessage = ''
  this.us.addNewUser(result.user.uid,data.name,data.address)
.then(()=>{
  this.router.navigate(['/'])

})
}

  )
.catch(err=> this.errorMessage =err.message)
}
}
