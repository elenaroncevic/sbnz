import { Component, OnInit } from '@angular/core';
import { AlarmService } from '../services/alarm.service';
import{Alarm} from '../model/Alarm'

@Component({
  selector: 'app-alarms',
  templateUrl: './alarms.component.html',
  styleUrls: ['./alarms.component.css']
})
export class AlarmsComponent implements OnInit {

  alarms: Alarm[];
  // loading : true;
  
   constructor(private alarmService: AlarmService) { }
  
   ngOnInit() {
     this.getAlarms();
   }
  
   getAlarms(): void {
     this.alarms = this.alarmService.getAlarms();
    /*  .subscribe(data =>{ 
         this.alarms = data
         this.loading = false;
       }); */
   }

  

}
