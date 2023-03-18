import { Component,
  Input,
  ViewChild,
  OnInit,
  HostListener, } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Persona } from 'src/app/models/persona';
import { Reserva } from 'src/app/models/reserva';

@Component({
  selector: 'app-single-check',
  templateUrl: './single-check.component.html',
  styleUrls: ['./single-check.component.css']
})
export class SingleCheckComponent implements OnInit {
  @Input() pData: any;
  
  @ViewChild('sigPad') sigPad: any;
  sigPadElement: any;
  context: any;
  band=false; 
  isDrawing = false;
  img: any;

  acomp: Array<Persona> = [];
  reserva: Array<Reserva> = [];

  constructor(private router: Router, private modalService: NgbModal) {
    this.asig();
    
  }

  //dentro del constructor va un (id:string)

  ngOnInit(): void {
  }

  async asig(){
    await new Promise(f => setTimeout(f, 10));
    this.acomp = this.pData.acompanantes;
    console.log(this.pData);
    console.log(this.acomp, 'acompanantes');
  }

  firmarReserva(reserva: Reserva): void {
    this.router.navigate(['sign', reserva._id]);
    console.log(reserva._id)
    this.modalService.dismissAll(SingleCheckComponent);
  }

  editarReserva(reserva: Reserva): void{
    this.router.navigate(['details', reserva._id]);
    console.log(reserva._id)
    this.modalService.dismissAll(SingleCheckComponent);
  }
}
