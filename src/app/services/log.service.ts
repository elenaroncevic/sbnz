import { Injectable } from '@angular/core';
import{Log, LOGS} from '../model/Log'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private httpClient: HttpClient) { }

  getLogs() : Log[] { //: Observable<Log[]> {
    /* return
        this.httpClient.get<Log[]>("neki url");
    */
    return LOGS;  //ovo zakomentarisati
  }

  search(database, regexString, log) : Log[]{ //: Observable<Log[]> {
    /* 
      if(regexString!=null)
        return this.httpClient.get<Log[]>("http://localhost:8080/searchRegex/" + database, regexString );
      else{
        return this.httpClient.get<Log[]>("http://localhost:8080/search/+database, log");
      }
    */
    return LOGS;
  }
}
