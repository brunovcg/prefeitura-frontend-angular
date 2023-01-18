import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router) { }

  buttonText="Acessar"
  buttonBackground="#044FA1"

  redirectAuth(){
    this.router.navigate(['auth']);
  }

}
