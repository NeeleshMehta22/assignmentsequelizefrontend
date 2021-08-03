import { Component, OnInit } from '@angular/core';
import { Iusers } from '../users/modal/user.modal';
import { UsersService } from '../users/userservice/users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  users:Iusers[]=[];
  load:string="load"
  loading:boolean=false;

  constructor(private userservice:UsersService,private router:Router) { }

  ngOnInit(): void {
  }

  getuser(){
    this.loading=true;
    this.load="Refresh"
    setTimeout(() => {
      this.loading=false;
    },2000);
    this.userservice.getuser().subscribe(
      (results)=>{
        this.loading=false;
        this.users=results.userinfo;
        console.log(this.users);
      },(error)=>{
        console.log(error.tostring);
        alert(error);
      }
    )
  }

  //ondelet..
  
    ondelete(user:Iusers){
      this.userservice.deleteuser(user).subscribe(
        (results)=>{
          this.getuser();
          
        },(error)=>{
          
          alert(error.tostring);
          
        }
      )}

      back(){
        this.router.navigateByUrl('');
      }

      onedit(id:number){
        this.router.navigateByUrl('/edit/' + id)

      }
      

}
