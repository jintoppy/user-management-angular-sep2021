import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { User } from '../models/user';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  getUsers(){
    const token = this.auth.getToken();
    let headers = new HttpHeaders({
      'token': token as string
    });

    return this.http.get<User[]>(`${environment.apiBaseUrl}/users`, {
      headers
    });
  }
}
