import { Component, OnInit, Input } from '@angular/core';
import { Reserva } from 'src/app/models/reserva';
import { ReservaService } from 'src/app/services/reserva.service';
import { ActivatedRoute } from '@angular/router';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';


@Component({
  selector: 'app-reserva-details',
  templateUrl: './reserva-details.component.html',
  styleUrls: ['./reserva-details.component.css']
})
export class ReservaDetailsComponent implements OnInit {
  reservaSeleccionada! : any; 
  most=false; 
  reser: string; 
  per!:Persona 
  constructor(private route: ActivatedRoute, private reservaService: ReservaService, private personaService: PersonaService) { 
    this.reser=  ""
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.url.join('/'));
    this.route.params.subscribe(params =>{
      this.reser = params['id']; 
      console.log(this.reser)
    })
    this.traerReserva(); 
    console.log(this.most)
  }

  traerReserva(){
    this.reservaService.getReserva(this.reser).subscribe((result)=> {
      this.reservaSeleccionada = result.reserva;
      console.log(this.reservaSeleccionada.nroAcompanantes); 
    }); 
    // this.reservaService.getReserva(this.reser).subscribe((data: any)=>{
    //   this.reservaSeleccionada = data.reserva; 
    //   console.log(this.reservaSeleccionada); 
    // })
  }

  imprimirDetalles(){
    this.most = true; 
    setTimeout(() => {
      window.print();
    }, 300); 
  }
  
  

}
