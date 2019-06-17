import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogsComponent } from './logs/logs.component';
import { AlarmsComponent } from './alarms/alarms.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'logs', component: LogsComponent},
  {path: 'alarms', component: AlarmsComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
