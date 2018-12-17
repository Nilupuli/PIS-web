import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { DoctorService } from './../../../services/doctor.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private doctorService : DoctorService,
               private router:Router ) { }

  form = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required])
  });

  ngOnInit() {
  }
  signUp(credentials) {
    this.doctorService.loginDoctor(credentials)
    .subscribe(result=>{
      let  res=result.json();
      console.log(res)
      if(res.length === 0){
        window.alert('E-mail or password wrong');
      }
      else{
        this.router.navigate(['/register/patientsearch'])
     
      }
    })
      
}
}
