import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IApiResponse, IUserModel, Login, Register } from '../model/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  commonApiUrl: string = "https://projectapi.gerasim.in/api/RfqTracker/";
  loggedUserData?: IUserModel;

  constructor(private httpClient: HttpClient) {
  }

  onRegister(obj: Register): Observable<IApiResponse> {
    return this.httpClient.post<IApiResponse>(this.commonApiUrl + 'Register', obj);
  }
  onLoginSrv(obj: Login): Observable<IApiResponse> {
    return this.httpClient.post<IApiResponse>(`${this.commonApiUrl}login`, obj);
  }
  loggedUser() {
    const loggedData = sessionStorage.getItem('RfqUser');
    if (loggedData) {
      this.loggedUserData = JSON.parse(loggedData);
    }
  }
}
