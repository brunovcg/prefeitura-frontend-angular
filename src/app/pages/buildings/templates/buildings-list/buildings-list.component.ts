import { Component, Input } from '@angular/core';
import { BuildingResponse } from '../../buildings.component';
import { constants } from 'src/app/constants/contants';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddBuildingComponent } from 'src/app/modals/add-building/add-building.component';
import { Currency } from 'src/app/helpers/currency';

const {colors} = constants

@Component({
  selector: 'app-buildings-list',
  templateUrl: './buildings-list.component.html',
  styleUrls: ['./buildings-list.component.scss']
})
export class BuildingsListComponent  {

  constructor(private router: Router,  public dialog: MatDialog) { }

  @Input() buildings:BuildingResponse[]  = []

  buttonCircle=true


  addText = "Cadastrar Imóvel"
  addIcon = "add"
  addBackground = colors.confirm
  addBuilding(){
    const dialogRef = this.dialog.open(AddBuildingComponent, {
      data : {successCallback: (payload: any)=>{
        const formatedPayload = {...payload}
        formatedPayload.iptu =Currency.toBRL(formatedPayload.iptu)
        this.buildings = [...this.buildings, formatedPayload]
      }}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

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
