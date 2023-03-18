import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  URL:string = "http://localhost:4200/check-in/0";
  //URL:string = window.location.protocol + "/check-in/0";

  status: number; 

  constructor(private _snackBar: MatSnackBar, private router: Router, public logS: LoginService) {
    this.status = 0;
  }

  ngOnInit(): void {
  }

  openSnackBar(){
    const config = new MatSnackBarConfig();
    config.duration = 1500; // duración en milisegundos
    this._snackBar.open('Link copiado con éxito', '', config );
  }

  check_hotel(){
    this.status=1; 
    this.router.navigate(['check-in/', this.status]);
    console.log(this.status)
  }
  logOut(){
    this.logS.logOut();
  }



}
