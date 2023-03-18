import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  returnUrl!:string;//url a la que devolveremos al usuario
  user !:string;
  passw!:string;
  msglogin!: string; // mensaje que indica si no paso el login
  hide: boolean = true;
  passwordInvalid!:boolean;

  constructor( private loginSer:LoginService,
    private route: ActivatedRoute,
    private router: Router) {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '';
   }

  ngOnInit(): void {
  }
  iniciar():void{
    console.log(this.passw);
    this.loginSer.postLogin(this.user, this.passw).subscribe((data: any)=>{
      if(data.status==0){
        console.log("ola")
        this.passwordInvalid = true;
        console.log(this.msglogin, data.msg);
        this.msglogin = "Credenciales incorrectas..";
      }
      if (data.status == 1){
      var user = data.user;
      sessionStorage.setItem("_id", user._id);
      sessionStorage.setItem("user", user.usuario);
      sessionStorage.setItem("root", user.root);
      sessionStorage.setItem("token", data.token);
      this.router.navigate([this.returnUrl]);
    }
 
      console.log("aaa" +data);});
  }

  togglePasswordVisibility(): void {
    this.hide = !this.hide;
  }
  
}
