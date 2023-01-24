import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { LoginPayload } from '../pages/auth/templates/login/login.component';
import {configs} from "../configs/configs"

const {user} = configs.baseURLS

const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class UserServiceService {

  constructor(private httpClient: HttpClient) { }

  userLogin(payload: LoginPayload){
    return this.httpClient.post(`${user}/api/login/`, payload ,HTTP_OPTIONS)
  }
}
