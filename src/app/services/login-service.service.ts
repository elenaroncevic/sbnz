import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { User } from '../model/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  logged : User;

  constructor(private httpClient: HttpClient, private router: Router) { }

  prijava(korisnik: User) {
 /*    this.httpClient.post("http://localhost:8080/osoba/login", korisnik)
        .subscribe(
            data => {
                this.logged = data as User;
                localStorage.setItem("logged", JSON.stringify(this.logged));
                this.router.navigate(['/home']);
            },
            //ovo je kopirano od dragane sa hedersima
            headers => {
                if (headers.status == 400) {
                    alert("Uneli ste neispravne kredencijale.")
                }
            }
        ); */
        //ovo ispod posle obrisati
        this.logged = korisnik;
        localStorage.setItem("logged", JSON.stringify(this.logged));
        this.router.navigate(['/home']);
  }


}
