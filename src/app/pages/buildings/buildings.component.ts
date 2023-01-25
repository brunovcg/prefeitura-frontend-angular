import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {constants} from "src/app/constants/contants"
import { StorageHelper } from 'src/app/helpers/storage';
import { BuildingServicesService } from 'src/app/services/building-services.service';

const {colors} = constants

export type BuildingResponse = {
  bairro : string
  endereco : string
  id : number
  iptu : number
  matricula : number
  tamanho : number
  user : number
}

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.scss']
})
export class BuildingsComponent implements OnInit {

  constructor(private router: Router, private buildingService: BuildingServicesService){}

  buildings: BuildingResponse[] = []


  ngOnInit(): void {
    this.buildingService.getAllByUser().subscribe({
      next:(res)=> this.buildings = res as BuildingResponse[]
    })
  }

  logoutBackground=colors.cancel
  logoutIcon="logout"
  logoutText='Logout'
  onLogoutClick(){
    this.router.navigate([''])
    StorageHelper.clear()
  }

  backBackground=colors.primary
  backIcon="arrow_back"
  backText='Voltar'
  onBackClick(){
    this.router.navigate(['session'])
  }
}
