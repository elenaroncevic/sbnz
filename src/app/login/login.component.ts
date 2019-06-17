import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../services/login-service.service';
import { User } from '../model/User';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  kor: User;
  prijavaForm: FormGroup;
  korIme: FormControl;
  lozinka1: FormControl;
  
  constructor(private prijavaService: LoginServiceService) {

   }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  
  createFormControls() {
    this.korIme = new FormControl('', Validators.required);
    this.lozinka1 = new FormControl('', Validators.required);
   
  }

  createForm() {
    this.prijavaForm = new FormGroup({
      korIme: this.korIme,
      lozinka1: this.lozinka1,
     
    });
  }
  onSubmit() {
   
    if (this.prijavaForm.valid) {
      this.kor = new User();
      this.kor.username = this.prijavaForm.controls.korIme.value;
      this.kor.password = this.prijavaForm.controls.lozinka1.value;
      this.prijavaService.prijava(this.kor);
      
      this.prijavaForm.reset();
    }else{
      this.korIme.markAsTouched();
      this.lozinka1.markAsTouched();
    }

  }
}
