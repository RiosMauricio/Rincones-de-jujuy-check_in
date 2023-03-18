import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Reserva } from '../models/reserva'; 

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  private baseURL: string = "https://servidor-rj0l.onrender.com/Reserva"; 
  //url!:string;

  constructor(private _http: HttpClient) {  }

  createReserva(reserva: any): Observable<any>{
    const options = {
      method: "POST",
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      })
    }

    const datos = JSON.stringify(reserva);

    return this._http.post(this.baseURL + '/post', datos, options)
  }

  getReservas(): Observable<any>{
    const options = {
      method: "GET",
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      })
    }
    return this._http.get(this.baseURL + '/traer', options)
  }


  getReserva(id: string): Observable<any> {
    const options = {
      method: "GET",
      headers: new HttpHeaders({
        
        "Content-Type": "application/json"
      }),
    }
    return this._http.get(this.baseURL+'/traer/'+ id, options)
  }


  getReservasFiltro(): Observable<any>{
    const options = {
      method: "GET",
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      })
    }
    return this._http.get(this.baseURL + '/traerfirmas', options)
  }
  editarReserva(id: string, firma:string): Observable<any>{
    const options = {
      method: "PUT",
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      })
    }
    let datos ={
      'Reserva':{
       'firma': firma
      }
    }
    return this._http.put(this.baseURL + '/editar/'+ id, datos, options)
  }

  // establecerValor(valor: any) {
  //   this.url = valor;
  // }

  // private datosCompartidos = new BehaviorSubject<string>('');

  // actualizarDatosCompartidos(datos: string) {
  //   this.datosCompartidos.next(datos);
  // }

  // obtenerDatosCompartidos() {
  //   return this.datosCompartidos.asObservable();
  // }

}
