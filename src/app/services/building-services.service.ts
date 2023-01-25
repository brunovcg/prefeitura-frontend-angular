import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {configs} from "../configs/configs"
import { User } from '../helpers/user';

const {building} = configs.baseURLS

const httpConfigs = ()=> {
  return {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization : `Token ${User.get().token}`
  })
}};

@Injectable({
  providedIn: 'root'
})
export class BuildingServicesService {

  constructor(private httpClient: HttpClient) { }

  getAllByUser(){
    return this.httpClient.get(`${building}/api/buildings/`, httpConfigs())
  }

  create(payload: any){
    return this.httpClient.post(`${building}/api/buildings/`,payload ,httpConfigs())
  }

  update(matricula: string, payload:any){
    return this.httpClient.patch(`${building}/api/buildings/matricula/${matricula}`,payload, httpConfigs())
  }

  delete(matricula: string){
    return this.httpClient.patch(`${building}/api/buildings/matricula/${matricula}`, httpConfigs())
  }
}
