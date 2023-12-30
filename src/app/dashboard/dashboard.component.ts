import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  user = '';
  acno: any;
  dateandtime: any;

  constructor(
    private ds: DataService,
    private fb: FormBuilder,
    private route: Router
  ) {
    this.dateandtime = new Date();

    this.user = JSON.parse(localStorage.getItem('currentuser') || '');
  }

  depositForm = this.fb.group({ acno: [''], psw: [''], amnt: [''] });

  ngOnInit(): void {
    if (!localStorage.getItem('currentacno')) {
      alert('please login to continue');
      this.route.navigateByUrl('');
    }
  }

  deposit() {
    var acno = this.depositForm.value.acno;
    var psw = this.depositForm.value.psw;
    var amnt = this.depositForm.value.amnt;

    const result = this.ds.deposit(acno, psw, amnt);

    if (result) {
      alert(`${amnt} credited to your account and balance is ${result}`);
    } else {
      alert('incorrect credentials');
    }
  }

  withdrawForm = this.fb.group({ acno1: [''], psw1: [''], amnt1: [''] });

  withdraw() {
    var acno1 = this.withdrawForm.value.acno1;
    var psw1 = this.withdrawForm.value.psw1;
    var amnt1 = this.withdrawForm.value.amnt1;

    const result = this.ds.withdraw(acno1, psw1, amnt1);

    if (result) {
      alert(`${amnt1} debited from your account and the balance is ${result} `);
    }
  }

  logout() {
    alert('you are logging out');
    localStorage.removeItem('currentuser');
    localStorage.removeItem('currentacno');
    this.route.navigateByUrl('');
  }

  delete() {
    this.acno = JSON.parse(localStorage.getItem('currentacno') || '');
  }

  oncancel() {
    this.acno = '';
  }
}
