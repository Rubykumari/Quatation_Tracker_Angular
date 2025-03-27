import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IApiResponse, Register } from '../model/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  onRegister(obj: Register):Observable<IApiResponse>{
   return this.httpClient.post<IApiResponse>('https://projectapi.gerasim.in/api/RfqTracker/Register', obj )
  }
}
