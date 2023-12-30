import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TmplAstRecursiveVisitor } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// global overloading headers
const option = {
  headers: new HttpHeaders(),
};

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private router: Router, private http: HttpClient) {}

  gettoken() {
    const token = JSON.parse(localStorage.getItem('token') || '');

    let headers = new HttpHeaders();
    if (token) {
      option.headers = headers.append('access-token', token);
    }
    return option;
  }

  register(uname: any, acno: any, psw: any) {
    const data = { uname, acno, psw };
    return this.http.post('http://localhost:3000/register', data);
  }

  login(acno: any, psw: any) {
    const data = { acno, psw };
    return this.http.post('http://localhost:3000/login', data);
  }

  deposit(acno: any, password: any, amount: any) {
    const data = { acno, psw: password, amount };
    return this.http.post(
      'http://localhost:3000/deposit',
      data,
      this.gettoken()
    );
  }

  withdraw(acno: any, password: any, amount: any) {
    const data = { acno, psw: password, amount };
    return this.http.post(
      'http://localhost:3000/withdraw',
      data,
      this.gettoken()
    );
  }

  gettransaction(acno: any) {
    const data = { acno };
    return this.http.post(
      'http://localhost:3000/transaction',
      data,
      this.gettoken()
    );
  }
}
