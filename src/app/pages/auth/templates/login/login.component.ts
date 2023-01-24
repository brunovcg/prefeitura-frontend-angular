import { Component } from '@angular/core';
import {UserServiceService} from "../../../../services/user-service.service"
import {StorageHelper} from "../../../../helpers/storage"
import { Router } from '@angular/router';

export type LoginPayload = {
  username: string
  password: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private userServiceService: UserServiceService, private router: Router ){}

  cpf: string = 'CPF'
  cpfPlaceholder: string = 'Digite o CPF'
  password: string = 'Password'
  passwordPlaceholder: string = 'Digite a senha'
  inputPassword: 'password' = 'password'

  submitText='Submeter'
  submitIcon='done'
  submitColor='#3bf770'

  onUsernameChange(event: any){
    this.payload = {...this.payload, username: event.target.value}
  }

  onPasswordChange(event: any){
    this.payload = {...this.payload, password: event.target.value}
  }

  handleSubmit(){
   this.userServiceService.userLogin(this.payload)
   .subscribe({
    next: (res)=> {
      StorageHelper.set('prefeitura-user', res)
      this.router.navigate(['/session'])

    },
    error: (err)=>console.log(err)
   })
  }

  payload: LoginPayload = {
    username: '',
    password: ''
  }

}
