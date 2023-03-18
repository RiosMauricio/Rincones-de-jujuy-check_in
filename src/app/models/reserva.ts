import { Persona } from "./persona";
import { Vehiculo } from "./vehiculo";
export class Reserva {
    _id!: string
    titular!: Persona; 
    vehiculo!:Vehiculo;
    nroAcompanantes!: number; 
    acompaniantes!: Array<Persona>;  
    fechaLlegada!: Date; 
    fechaSalida!: Date; 
    medioTransporte!: string; 
    frecuenciaLimpieza!: string; 
    horaLLegada!: string; 
    notas!: string; 
    firma!: string;
}
