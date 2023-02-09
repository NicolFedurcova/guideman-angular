import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/entities/user';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: User[] = []
  serverUrl = "http://localhost:8080/users";

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  getUsersFromServer(): Observable<User[]> {
    return this.http.get<User[]>(this.serverUrl);
  }

  saveUser(user: User): Observable<any> {
    return this.http.post(this.serverUrl, user);
  }

  updateUser(user: User): Observable<any> {
    return this.http.put(this.serverUrl + "/" + user.id, user);
  }

  deleteUser(user: User): Observable<any> {
    return this.http.delete(this.serverUrl + "/delete/" + user.id);
  }

}
