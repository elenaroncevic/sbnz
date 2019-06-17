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
 // loading : true;
 
  constructor(private logService: LogService) { }
 
  ngOnInit() {
    this.getLogs();
  }
 
  getLogs(): void {
    this.logs = this.logService.getLogs();
   /*  .subscribe(data =>{ 
        this.logs = data
        this.loading = false;
      }); */
  }
}
