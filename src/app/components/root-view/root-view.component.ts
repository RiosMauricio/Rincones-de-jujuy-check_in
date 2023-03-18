import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Direccion } from 'src/app/models/direccion';
import { Empleado } from 'src/app/models/empleado';
import { Persona } from 'src/app/models/persona';
import { LoginService } from 'src/app/services/login.service';
import { PersonaService } from 'src/app/services/persona.service';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';

@Component({
  selector: 'app-root-view',
  templateUrl: './root-view.component.html',
  styleUrls: ['./root-view.component.css']
})
export class RootViewComponent implements OnInit {

  empleado!:Persona;
  user!:Empleado;
  direccionEmpleado!:Direccion;
  empleadoNuevo = {}; 

  displayedColumns: string[] = ['NomApe', 'Usuario', 'Contraseña','Admin'];
  dataSource = new MatTableDataSource<Empleado>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  searchKey!: string;
  selectedValue!: string;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  
  constructor(private personaService: PersonaService, public loginS: LoginService, private router: Router) {
    this.empleado = new Persona();
    this.empleado.titular = false;
    this.direccionEmpleado = new Direccion();
    this.user = new Empleado();
    this.user.root = false;
    this.obtenerEmpleados();
    if(loginS.userLoggedIn()==false){
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {
  }

  obtenerEmpleados() {
    this.personaService.getEmpleados().subscribe(
      (result) => {
        console.log(result, "Empleados");
        this.dataSource.data = result.msg;
      },
      error => { alert("Error en la petición"); }
    )
  }

  guardarEmpleado(){
    //this.personaService.createEmpleado(this.empleado).subscribe()
    this.empleadoNuevo = {"Persona": this.empleado, "Direccion": this.direccionEmpleado, "Empleado": this.user}
    console.log(this.empleadoNuevo,"empleado nuevo")
    this.personaService.createEmpleado(this.empleadoNuevo).subscribe((data: any)=>{
            console.log(data);
          })
  }
}
