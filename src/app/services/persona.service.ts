import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona'; 

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private baseURL: string = "https://servidor-rj0l.onrender.com/Persona";
  constructor(private _http: HttpClient) { }

  createPersona(persona: Persona): Observable<any>{
    const options = {
      method: "POST",
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      })
    }

    const datos = JSON.stringify(persona);

    return this._http.post(this.baseURL + '/post', datos, options)
  }

  createEmpleado(persona: any): Observable<any>{
    const options = {
      method: "POST",
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      })
    }

    const datos = JSON.stringify(persona);

    return this._http.post(this.baseURL + '/post/empleado', datos, options)
  }

  getEmpleados(): Observable<any> {
    const options = {
      method: "GET",
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      })
    }
    return this._http.get(this.baseURL + '/get/empleados', options);
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
    return this._http.post(this.baseURL + '/login', datos, options)
  }
}
