import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  email: string = '';
  name:string='';
  phone:string='';
  msg:string='';
  isLogin: boolean = true;
  erroMessage: string = "";
  constructor(private router: Router,private http: HttpClient) { }
  

    send(){
      console.log(this.email);
    let bodyData = {
      email: this.email,
      name:this.name,
      phone:this.phone,
      msg:this.msg
    };
    console.log(bodyData);
      this.http.post("https://aspbackendapi.aspinstruments.in/ok",bodyData).subscribe((result:any)=>{
        console.log(result.message);

        if(result.message == 'one'){
          
        alert("Student Registered Successfully");
        }
      })
    }

}
