import { Component } from '@angular/core';
import { Router } from "@angular/router"
import { User } from './model/User';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sbnz-front';

  constructor(private router: Router) { }

  get user(): any{
    return JSON.parse(localStorage.getItem('logged')) as User;
 }

 odjava(){
   localStorage.removeItem('logged');
   this.router.navigate(['/'])


 }
}
