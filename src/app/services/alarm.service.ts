import { Injectable } from '@angular/core';
import {Alarm, ALARMS} from '../model/Alarm';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlarmService {

  constructor(private httpClient: HttpClient) { }

  getAlarms() : Alarm[] { //: Observable<Log[]> {}
    /* return
        this.httpClient.get<Alarm[]>("neki url");  */
    return ALARMS;  //ovo zakomentarisati
  }
}
