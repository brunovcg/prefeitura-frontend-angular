import { Component } from '@angular/core';
import { Router } from '@angular/router';

type AuthRenderer = 'login' | 'signup'
type AuthTitle = 'Login' | 'Signup'
type AuthIcon = 'how_to_reg' | 'login'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  constructor(public router: Router){}

  authTitle: AuthTitle = 'Login'
  renderer: AuthRenderer = 'login'
  buttonText: AuthTitle = 'Login'
  buttonTemplateBackground="#FBDC51"
  buttonTemplateIcon: AuthIcon='login'
  buttonHomeBackground='#044FA1'
  message: string = 'Ainda não é cadastrado?'
  homeIcon="house"



  onToogleTemplateClick(type: AuthRenderer){
    const toggle = {
       login: {
        authTitle: 'Signup',
        renderer: 'signup',
        buttonText: 'Signup',
        buttonTemplateBackground: '#3bf770',
        buttonTemplateIcon:'how_to_reg',
        message: 'Já é cadastrado?'
       },
       signup:{
        authTitle: 'Login',
        renderer: 'login',
        buttonText: 'Login',
        buttonTemplateBackground: "#FBDC51",
        buttonTemplateIcon:'login',
        message:  'Ainda não é cadastrado?',
       }
    }
    this.authTitle = toggle[type].authTitle as AuthTitle
    this.renderer = toggle[type].renderer as AuthRenderer
    this.buttonText = toggle[type].buttonText as AuthTitle
    this.buttonTemplateBackground = toggle[type].buttonTemplateBackground
    this.buttonTemplateIcon = toggle[type].buttonTemplateIcon as AuthIcon
    this.message = toggle[type].message
  }
  
  onHomeClick(){
      this.router.navigate([''])
  }

}
