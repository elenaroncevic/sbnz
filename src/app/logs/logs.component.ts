import { Component, OnInit } from '@angular/core';
import {Log, LOGS} from '../model/Log'
import {LogService} from '../services/log.service'

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {


  logs: Log[];
  database : boolean = true;

  regex : boolean = false;
  log: Log ;

  regexText: string = null;

  logTypes = ["Login","VirusThreat", "ThreatEliminated", "Information"];
  logStatus = ["Ok", "Warning", "Error"];
  informationSystems = ["PaymentSystem", "SecuritySystem", "PrivacySystem", "All"];
 // loading : true;
 
  constructor(private logService: LogService) { }
 
  ngOnInit() {
    this.getLogs();
    this.log = {type:null, status:null, text: null, time:null, id:null, machineIp:null, informationSystem: null, userUsername: null};
    console.log(this.log);
  }
 
  getLogs(): void {
    this.logs = this.logService.getLogs();
   /*  .subscribe(data =>{ 
        this.logs = data
        this.loading = false;
      }); */
  }

  search():void{
    
    this.logs = this.logService.search(this.database, this.regexText, this.log);
    /*  .subscribe(data =>{ 
        this.logs = data
        this.loading = false;
      }); */
  }
}
