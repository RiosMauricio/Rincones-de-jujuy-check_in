import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SignaturePadModule } from 'angular2-signaturepad';
import { AlifeFileToBase64Module } from 'alife-file-to-base64';


import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkViewComponent } from './components/work-view/work-view.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { SingleCheckComponent } from './components/single-check/single-check.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CheckInFormComponent } from './components/check-in-form/check-in-form.component';

import { SignComponent } from './components/sign/sign.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatatableComponent } from './components/datatable/datatable.component';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCheckboxModule} from '@angular/material/checkbox';


import {ClipboardModule} from '@angular/cdk/clipboard';
import { ReservaDetailsComponent } from './components/reserva-details/reserva-details.component';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login.service';
import { TokenInterceptorService } from './services/token-interceptor.service';

import { RootViewComponent } from './components/root-view/root-view.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';



@NgModule({
  declarations: [
    AppComponent,
    WorkViewComponent,
    HeaderComponent,
    SingleCheckComponent,
    CheckInFormComponent,
    SignComponent,
    DatatableComponent,
    ReservaDetailsComponent,
    LoginComponent,
    RootViewComponent,
    EmployeeFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SignaturePadModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    ClipboardModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AlifeFileToBase64Module

  ],
  providers: [
    LoginService,
    { provide: HTTP_INTERCEPTORS,
       useClass: TokenInterceptorService, 
       multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
