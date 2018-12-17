import { Http } from '@angular/http';
import { DoctorService } from './../../../services/doctor.service';
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  constructor(private doctorService : DoctorService,
    private router: Router) {}

  form = new FormGroup({
    fullName: new FormControl("", [Validators.required]),
    knownName: new FormControl("", [Validators.required]),
    phoneNo: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required]),
    repeatPassword: new FormControl("", [Validators.required])
  });

  ngOnInit() {}

  signUp(credentials) {
    this.doctorService.registerDoctor(credentials)
    .subscribe(result=>{
      if(result){
        this.router.navigate(['/register/patientsearch'])
      }
      else{
        window.alert('user already exists');
      }
    })
      
}
}
