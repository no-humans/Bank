import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { FormBuilder, Validators } from '@angular/forms';
import { TmplAstDeferredBlockLoading } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  aim = 'your perfect banking partner. PLEASE LOGIN TO YOU FEDMOBILE';
  data = 'Enter Account Number';
  // acno = '';
  // psw = '';


  constructor(private router:Router, private ds:DataService,private fb:FormBuilder){}

  loginForm=this.fb.group({acno:['',[Validators.required,Validators.pattern('[0-9]+')]],psw:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]]})

  login(){
    var acno=this.loginForm.value.acno
    var psw=this.loginForm.value.psw

if(this.loginForm.valid){
  const result=this.ds.login(acno,psw)
  if(result){
    alert('login success')
    this.router.navigateByUrl('dashboard')
  }
  else{
    alert('Incorrect credentials')
  }
}
else{
  alert('Form not valid')
  this.loginForm.reset({acno:'',psw:''})
}
  }

  // login(a: any, b: any) {
  //   this.acno = a.value;
  //   this.psw = b.value;
  //   var acno = this.acno;
  //   var psw = this.psw;
  //   var userDetails = this.userDetails;

  //   if (acno in userDetails) {
  //     if (psw == userDetails[acno]['password']) {
  //       alert('login success');
  //     } else {
  //       alert('incorrect password');
  //     }
  //   } else {
  //     alert('Enter a valid account number');
  //   }
  // }
  // acnoChange(event:any){
  // this.acno=event.target.value
  // }
  // pswChange(event:any){
  // this.psw=event.target.value
  // }
}
