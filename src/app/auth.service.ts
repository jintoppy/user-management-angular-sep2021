import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';
import { tap, catchError} from 'rxjs/operators';

type LoginResponse = {
  token: string;
  status: string;
  msg?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(loginDetails: {username: string, password: string}){
    return this.http
              .post<LoginResponse>(`${environment.apiBaseUrl}/auth/login`, loginDetails)
              .pipe(
                tap((res) => {
                  console.log(res);
                  this.setToken(res.token);
                }),
                catchError(resp => {
                  return of({
                    token: '',
                    status: 'failed',
                    msg: resp.error.msg
                  })
                })
              )
  }

  setToken(token:string){
    localStorage.setItem('token', token);
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
