import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Component } from "@angular/core";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./component/Common/navbar/navbar.component";
import { FooterComponent } from "./component/Common/footer/footer.component";
import { HomeComponent } from "./component/Common/home/home.component";
import { ProfileComponent } from "./component/Doctor/profile/profile.component";
import { RouterModule, Routes } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { RegisterComponent } from "./component/Doctor/register/register.component";
import { MatCardModule } from "@angular/material/card";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { PatientSearchComponent } from './component/Doctor/patient-search/patient-search.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from "./component/Doctor/login/login.component";
import { TestComponent } from './test/test.component';
import { PprofileComponent } from "./component/Patient/pprofile/pprofile.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "register/patientsearch", component: PatientSearchComponent },
  { path: "register/pprofile", component: PprofileComponent }

  //{path:''}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    PatientSearchComponent,
    PprofileComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
