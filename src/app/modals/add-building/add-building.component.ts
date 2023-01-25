import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InputType } from 'src/app/components/input/input.component';
import { constants } from 'src/app/constants/contants';
import { BuildingServicesService } from 'src/app/services/building-services.service';

const {colors, neighborhoods} = constants

type PayloadType ={
   tamanho: number
   endereco: string
   bairro: string
}

@Component({
  selector: 'app-add-building',
  templateUrl: './add-building.component.html',
  styleUrls: ['./add-building.component.scss']
})
export class AddBuildingComponent {

  title: string

  constructor(
  public dialogRef: MatDialogRef<AddBuildingComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any,
  private buildingServicesService: BuildingServicesService
  ){
    if(data.state){
      this.title = 'Editar Imóvel'
      this.areaValue = data.state.area
      this.addressValue = data.state.address
      this.neighborhoodValue = data.state.neighborhood
    } else{
      this.title = 'Novo Imóvel'
    }
  }

  payload: PayloadType = {tamanho: 0, endereco : '', bairro: neighborhoods[0].text}


  areaLabel = "Área"
  areaError= ""
  areaType: InputType  = "number"
  areaPlaceholder = "Digite o tamanho do imóvel"
  areaValue =""
  onAreaChange(event: any){
    this.payload = {...this.payload, tamanho: Number(event.target.value) || 0}
  }
  keyupArea(){
    this.areaError= ""
  }

  addressLabel = "Endereço"
  addressError = ""
  addressPlaceholder = "Digite o endereço"
  addressValue =""
  onAddressChange(event: any){
    this.payload = {...this.payload, endereco: event.target.value}
  }
  keyupAddress(){
    this.addressError= ""
  }

  neighborhoodLabel = "Bairro"
  neighborhoodOptions = neighborhoods
  neighborhoodValue: {value: string, text:string} = neighborhoods[0]
  onNeighborhoodChange(event: any){
    this.payload = {...this.payload, bairro: event.target.value}
  }


  cancelIcon = 'cancel'
  cancelBackground = colors.cancel
  cancelText = 'Cancelar'
  cancel(): void {
    this.dialogRef.close();
  }

  submitIcon = 'done'
  submitBackground = colors.confirm
  submitText = 'Submeter'
  submit(): void {
    const {endereco, tamanho} = this.payload
    let error = false

    if (!endereco){
      this.addressError = 'Campo obrigatório'
      error = true
    }
    if (!tamanho){
      this.areaError = 'Campo obrigatório'
      error = true
    }
    if(error){
      return
    }
    if(this.data.state){
      this.buildingServicesService.update(this.data.state.matricula, this.payload).subscribe({
        next: (res)=>{
          this.dialogRef.close();
          this.data.state.successCallback(res)
          alert('Imóvel atualizado!')
        },
        error: (err)=>{
          alert('Ocorreu um erro, tente mais tarde')
        }
      })
    } else {
      this.buildingServicesService.create(this.payload).subscribe({
        next: (res)=>{
          alert('Imóvel criado!')
          this.dialogRef.close();
          this.data.successCallback?.(res)
        },
        error: (err)=>{
          alert('Ocorreu um erro, tente mais tarde')
        }
      })
    }
  }
}
