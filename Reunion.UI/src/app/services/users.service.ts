import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment.development';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseApiUrl + '/api/user');
  }

  addUser(addUserRequest: User): Observable<User> {
    return this.http.post<User>(this.baseApiUrl + '/api/user', {name: addUserRequest.name});
  }

  deleteUser(id: string): any {
    return this.http.delete(this.baseApiUrl + `/api/user/${id}`);
  }

  updateUser(id: string, user: User): Observable<User> {
    return this.http.put<User>(this.baseApiUrl + `/api/user/${id}`, user);
  }
}
