import { Component, Input } from '@angular/core';
import { BuildingResponse } from '../../buildings.component';
import { constants } from 'src/app/constants/contants';
import { Router } from '@angular/router';

const {colors} = constants

@Component({
  selector: 'app-buildings-list',
  templateUrl: './buildings-list.component.html',
  styleUrls: ['./buildings-list.component.scss']
})
export class BuildingsListComponent  {

  constructor(private router: Router) { }

  @Input() buildings:BuildingResponse[]  = []

  buttonCircle=true



  addText = "Cadastrar Imóvel"
  addIcon = "add"
  addBackground = colors.confirm
  addBuilding(){}

  updateIcon = "edit"
  updateBackground = colors.secondary
  updateBuilding(){}

  deleteIcon = "delete"
  deleteBackground = colors.cancel
  deleteBuilding(){}


  viewIcon="description"
  viewText = "Visualizar"
  viewBackground = colors.primary
  viewBillet(building: BuildingResponse){
    this.router.navigateByUrl('session/buildings/billet', {state: {building}})
  }

}
