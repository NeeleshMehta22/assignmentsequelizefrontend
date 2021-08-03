import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users/userservice/users.service';
import {NgForm} from '@angular/forms'

import { Iusers } from '../users/modal/user.modal';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  users={
    id:'',
    firstname:'',
    middlename:'',
    lastname:'',
    email:'',
    phonenumber:'',
    role:'',
    address:'',
  }
  constructor(private router:Router,private userService:UsersService) { }

  ngOnInit(): void {
  }

  back(){
    this.router.navigateByUrl('');
  }

  addUser(users:any,myForm:NgForm){
    console.log("add user",users);
    this.userService.createuser(users).subscribe((response: any)=>{
    //  this.add.getuser();
    })
    myForm.reset();
  }

  oncancel(myForm:NgForm){
    myForm.reset();
  }


  
}
