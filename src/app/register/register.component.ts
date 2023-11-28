import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  // uname=''
  // acno=''
  // psw=''

  constructor(
    private ds: DataService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  registerForm = this.fb.group({
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
  });

  register() {
    var uname = this.registerForm.value.uname;
    var acno = this.registerForm.value.acno;
    var psw = this.registerForm.value.psw;

if(this.registerForm.valid){

  const result = this.ds.register(uname, acno, psw);

  if (result) {
    alert('Registration success');
    this.router.navigateByUrl('');
  } else {
    alert('user already exist');
    this.router.navigateByUrl('');
  }

}
else{
  alert('Invalid Form')
  this.registerForm.reset({uname:'',acno:'',psw:''})  
}
  }
}
