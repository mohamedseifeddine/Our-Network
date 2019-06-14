import { Component, OnInit } from '@angular/core';
import {Routeur} from '../../interfaces/routeurs.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  checked: boolean;
  title = 'Routeurs' ;
  routeurs : Routeur[] = [
    { status: 'connected' , ip:'22' , debit:'2Mo/s' , username :'' , password:'' , disponibility: 'every day of the week from 23h' , amount:'infinity'  } ,
    { status: 'disconnected' , ip:'23' , debit:'3.6Mo/s' ,username :'' , password:'' , disponibility: 'is not available in the weekend' , amount:'25GO'},
    { status: 'connected' ,  ip:'24' , debit:'1.4Mo/s' , username :'' , password:'' , disponibility: 'available Monday to Friday between 10 pm and 8 am' , amount:'25GO'}
    
    ] 

    data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'First Dataset',
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              borderColor: '#4bc0c0'
          },
          {
              label: 'Second Dataset',
              data: [28, 48, 40, 19, 86, 27, 90],
              fill: false,
              borderColor: '#565656'
          }
      ]
  }
   

   
  constructor() {   }

  ngOnInit() {
  }
  addRouteur(newip , newdebit , newstatus , newdisponibility , newamount ,newusername,newpassword){
    var newrouteur = {
      ip : newip , 
      debit :newdebit,
       status:newstatus,
       disponibility:newdisponibility,
       amount : newamount ,
       username:newusername,
       password:newpassword
    }
    this.routeurs.push(newrouteur)
    
    }

}
