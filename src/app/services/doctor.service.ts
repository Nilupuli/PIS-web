import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http :Http) { }

  registerDoctor(credentials){
    return this.http.post('http://localhost:3003/signup',credentials)
    

  }

  getPatientDetails(credentials):Observable<any>{
   return this.http.post('http://localhost:3003/patientdetails',credentials)
   .pipe((map(res => res.json())));
   
  }

  loginDoctor(credentials){
    return this.http.post('http://localhost:3003/signin',credentials)
    
  }
}
