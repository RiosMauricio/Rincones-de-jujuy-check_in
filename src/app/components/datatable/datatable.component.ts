import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Reserva } from 'src/app/models/reserva';
import { ReservaService } from 'src/app/services/reserva.service';
import { SingleCheckComponent } from '../single-check/single-check.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { stringify } from 'querystring';
@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {
  meses: string[] = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];

  displayedColumns: string[] = ['Titular', 'NomApe', 'fechaLlegada', 'fechaSalida', 'acciones'];





  selectedValue!: string;
//=======
 dataSource = new MatTableDataSource();
 FechaFiltro!:Date;
 reservas: Array<any> = new Array();
 reservasFirmadas: Array<Reserva> = [];
 reservasNoFirmadas: Array<Reserva> = [];

//>>>>>>> master

  //id:string= "6409f9e7b8fc5cee48affc51";

  @Output() eventData = new EventEmitter<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  searchKey!: string;
  

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private reservaService: ReservaService,
    private router: Router, private modalService: NgbModal) {

  }

  ngOnInit(): void {
    this.obtenerReservas();
   
    //this.obtenerReservasFiltradas();
    //  console.log(this.reservas, "reservas");
    //  this.dataSource.data = this.reservas;
    //  console.log(this.dataSource.data, "data");

  }

  filtrarPorFecha(fecha: string, tipo : boolean) {// si se manda false nos fijamos en la de llegada si se manda true vemos las de salida
    var f = new Date(fecha).toDateString()
   
    this.dataSource.filterPredicate = (data: any, filter: string) => {
      var aux = new Reserva();
      aux = data.Reserva
      if(tipo==false){
        var fechaaux= new Date(aux.fechaLlegada).toDateString();
        console.log(fechaaux +"llegada" );
      console.log(f)
      }else {console.log("salida" );
        var fechaaux= new Date(aux.fechaSalida).toDateString();
      }
      
      return fechaaux === f;
    };
    this.dataSource.filter = fecha.toString();
  }
  Elegirmes(mes:number){
    var filtroM = mes;
    this.dataSource.filterPredicate = (data: any, filter: string) => {
      console.log("ola");
      var fechatablaM = new Date(data.Reserva.fechaLlegada).getMonth();
      var fechatablaY = new Date(data.Reserva.fechaLlegada).getFullYear();
      let year = new Date().getFullYear();
      return filtroM === fechatablaM && fechatablaY === year
    }
    this.dataSource.filter = mes.toString();
  }
  


  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource.data, "filter")
    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
    // }
  }


  // open() {
  // 	const modalRef = this.modalService.open(SingleCheckComponent);
  // 	modalRef.componentInstance.name = 'World';
  // }

  selectedReserva(reserva: Reserva): void {
    this.eventData.emit(reserva);
  }

  async obtenerReservas() {
    await new Promise(f => setTimeout(f, 10));
    this.reservaService.getReservas().subscribe(
      (result) => {
        this.reservas = result.msg;
        this.reservas  = this.reservas.map(reserva => {
          return {
            Reserva: reserva,
            titularDocumento: reserva.titular.documento
          };
        });
        this.dataSource.data = this.reservas;
        console.log(this.dataSource.data, "data");
      },
      error => { alert("Error en la petición"); }
    )
  }

  async obtenerReservasFiltradas() {
    await new Promise(f => setTimeout(f, 10));
    this.reservaService.getReservasFiltro().subscribe(
      (result) => {
        this.reservasFirmadas = result.firmadas;
        console.log(this.reservasFirmadas, "result firmadas");
        //this.dataSource.data = this.reservasFirmadas;
        // this.reservasNoFirmadas = result.nofirmadas;
        // console.log(this.reservasNoFirmadas, "result no frimardas");
      },
      error => { alert("Error en la petición"); }
    )
  }

  onFilterChange() {
    this.reservaService.getReservasFiltro().subscribe(
      (result) => {
        this.reservasFirmadas = result.firmadas;
        this.reservasNoFirmadas = result.nofirmadas;
        console.log(this.reservasFirmadas, "result firmadas filtro void");
  
        if (this.selectedValue  === 'firmadas') {
          this.dataSource.data = this.reservasFirmadas.map(reserva => {
            return {
              Reserva: reserva,
              titularDocumento: reserva.titular.documento
            };
          });;
        } else if (this.selectedValue  === 'nofirmadas') {
          this.dataSource.data = this.reservasNoFirmadas.map(reserva => {
            return {
              Reserva: reserva,
              titularDocumento: reserva.titular.documento
            };
          });;
        }
      }


    )

    if (this.selectedValue == "firmadas"){
      this.dataSource.data = this.reservasFirmadas.map(reserva => {
        return {
          Reserva: reserva,
          titularDocumento: reserva.titular.documento
        };
      });
    } else if (this.selectedValue == "nofirmadas"){
      this.dataSource.data = this.reservasNoFirmadas.map(reserva => {
        return {
          Reserva: reserva,
          titularDocumento: reserva.titular.documento
        };
      });;
    }

  }

  cls(){
    this.selectedValue = "";
    this.reservaService.getReservas().subscribe(
      (result) => {
        this.reservas = result.msg;
        this.dataSource.data = this.reservas.map(reserva => {
          return {
            Reserva: reserva,
            titularDocumento: reserva.titular.documento
          };
        });;
      }
    )
  }

  editarReserva(reserva: Reserva): void{
    this.router.navigate(['details', reserva._id]);
    console.log(reserva._id);
  }
}
