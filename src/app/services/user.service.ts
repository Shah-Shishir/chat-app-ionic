import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Endpoints
import { Endpoints } from '../config/endpoints/endpoints';

// Models
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private readonly http: HttpClient) {}

  enterChatRoom(payload: any): Observable<User> {
    return this.http.post<User>(Endpoints.ENTER_CHATROOM, payload);
  }

  fetchOnlineUsers(): Observable<User[]> {
    return this.http.get<User[]>(Endpoints.GET_ONLINE_USERS);
  }
}
