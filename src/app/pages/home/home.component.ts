import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { constants } from 'src/app/constants/contants';

const {colors} = constants

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router) { }

  buttonText="Acessar"
  buttonBackground = colors.primary

  redirectAuth(){
    this.router.navigate(['auth']);
  }

}
