import { HttpClient } from '@angular/common/http';
import { TmplAstRecursiveVisitor } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  currentuser = '';
  currentacno = '';
  userDetails: any;
  constructor(private router: Router, private http: HttpClient) {
  }

  savedetails() {
    if (this.userDetails) {
      localStorage.setItem('database', JSON.stringify(this.userDetails));
    }

    if (this.currentuser) {
      localStorage.setItem('currentuser', JSON.stringify(this.currentuser));
    }

    if (this.currentacno) {
      localStorage.setItem('currentacno', JSON.stringify(this.currentacno));
    }
  }


  // userDetails: any = {
  //   1000: {
  //     acno: 1000,
  //     username: 'anu',
  //     password: 123,
  //     balance: 0,
  //     transaction: [],
  //   },
  //   1001: {
  //     acno: 1001,
  //     username: 'john',
  //     password: 123,
  //     balance: 0,
  //     transaction: [],
  //   },
  //   1002: {
  //     acno: 1002,
  //     username: 'Rengoku',
  //     password: 123,
  //     balance: 0,
  //     transaction: [],
  //   },
  //   1003: {
  //     acno: 1003,
  //     username: 'wick',
  //     password: 123,
  //     balance: 0,
  //     transaction: [],
  //   },
  // };

  register(uname: any, acno: any, psw: any) {
    const data = { uname, acno, psw };
    return this.http.post('http://localhost:3000/register', data);
  }

  login(acno: any, psw: any) {
    const data = { acno, psw };
    return this.http.post('http://localhost:3000/login', data);
  }

  deposit(acno: any, password: any, amount: any) {
    var userDetails = this.userDetails;
    var amnt = parseInt(amount);
    if (acno in userDetails) {
      if (password == userDetails[acno]['password']) {
        userDetails[acno]['balance'] += amnt;
        userDetails[acno]['transaction'].push({ type: 'CREDIT', amount: amnt });
        this.savedetails();
        return userDetails[acno]['balance'];
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  withdraw(acno: any, password: any, amount: any) {
    var userDetails = this.userDetails;
    var amnt = parseInt(amount);
    if (acno in userDetails) {
      if (password == userDetails[acno]['password']) {
        if (amnt <= userDetails[acno]['balance']) {
          userDetails[acno]['balance'] -= amnt;
          userDetails[acno]['transaction'].push({
            type: 'DEBIT',
            amount: amnt,
          });
          this.savedetails();
          return userDetails[acno]['balance'];
        } else {
          alert('insufficent balnce');
          return false;
        }
      } else {
        alert('incorrect password');
        return false;
      }
    } else {
      alert('incorrect account number');
      return false;
    }
  }

  gettransaction(acno: any) {
    return this.userDetails[acno]['transaction'];
  }
}
