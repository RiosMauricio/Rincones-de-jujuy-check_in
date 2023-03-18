import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient) { }
  getToken():string{
    if(sessionStorage.getItem("token")!=null){
      return sessionStorage.getItem("token")!;
    }else {
      return "";
    }
  }

  postLogin(user:string, passw:string): Observable<any>{
    const datos = {
      "usuario":user,
      "password": passw
    }
    const options = {
      method: "POST",
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      })
    }
    return this._http.post('https://servidor-rj0l.onrender.com/Persona/login', datos, options);
  }

  public userLoggedIn(){ 
    var resultado = false;
     var usuario = sessionStorage.getItem("_id"); 
     if(usuario!=null){ 
      resultado = true; 
    }
      return resultado }

  public logOut(){
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("_id");
  }

  public userLogged() {
    var usuario = sessionStorage.getItem("user");
    return usuario;
  }

  public esAdmin():boolean {
    if (sessionStorage.getItem("root") != null) {
      if ((sessionStorage.getItem("root")) == "true") {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}
