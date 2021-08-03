import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsersService } from '../users/userservice/users.service';
import { Iusers } from '../users/modal/user.modal';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
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

  constructor(private router:Router,private userService:UsersService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((results)=>{
      this.getuserbyid(results);
    })
  }


  back(){
    this.router.navigateByUrl('/adduser');
  }

  oncancel(myForm:NgForm){
    myForm.reset();
  }
  updateUser(myForm:NgForm){

    this.userService.updateuser(this.users).subscribe(()=>{

    })
    myForm.reset();
  }
  getuserbyid(id:any){
    this.userService.getuserbyid(id.id).subscribe((results)=>{
      this.users=results;
      console.log(this.users);
    })
  }




}
