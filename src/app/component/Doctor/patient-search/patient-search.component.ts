import { DoctorService } from './../../../services/doctor.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { PatientDetails } from '../../../Model/PatientDetais';

@Component({
  selector: 'app-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.css']
})
export class PatientSearchComponent implements OnInit {

  constructor(private doctorService : DoctorService) { }

  form = new FormGroup({
    searchpatient: new FormControl(""),

  });

patientDetails: PatientDetails = {
  Reg_No:'',
  Patient_Name:'',
  Date_of_birth:'',
  NIC_No: '',
  Email : '',
  Home_Address:'',
  Contact_No:'',
  Picture:'',
} 


  ngOnInit() {
  }

  search(credentials){
console.log(credentials);
this.doctorService.getPatientDetails(credentials)
.subscribe(res=>this.patientDetails = res);

  }

}
