import { Component, OnInit } from '@angular/core';
import { StorageHelper } from 'src/app/helpers/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {

  constructor(private router: Router){}

  today = new Date().toLocaleDateString()
  user = {name: '', persona : 0}

  logoutBackground="#f73b3b"
  logoutIcon="logout"
  logoutText='Logout'

  onLogoutClick(){
    this.router.navigate([''])
    StorageHelper.clear()
  }

  ngOnInit(): void {
    const user = StorageHelper.get('prefeitura-user')
    this.user = user
  }
}
