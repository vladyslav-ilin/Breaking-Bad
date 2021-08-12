import { Component } from '@angular/core';
import {LoginService} from "./services/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isLoggedIn: boolean = false;

  constructor(private loginService: LoginService) {
    this.isLoggedIn = loginService.isLogin

/*
    this.loginService.getYourPerson()
*/

  }
}
