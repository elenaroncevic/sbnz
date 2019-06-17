import { Injectable } from '@angular/core';
import{Log, LOGS} from '../model/Log'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private httpClient: HttpClient) { }

  getLogs() : Log[] { //: Observable<Log[]> {}
    /* return
        this.httpClient.get<Log[]>("neki url")
        .subscribe(
            data => {
                this.logged = data as User;
                localStorage.setItem("logged", JSON.stringify(this.logged));
                this.router.navigate(['/home']);
            }
        );  */
    return LOGS;  //ovo zakomentarisati
  }
}
