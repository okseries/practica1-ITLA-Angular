export type Grade =
  'MENSAJE' |
  'NOMBRE' |
  'RESTA' |
  'AREA' |
  'CONDICIONAL' |
  'DATOS' |
  'FECHA';

export interface Persona {
  nombre: string;
  edad: number;
}

export interface DataI {
  id: number;
  nombre: string;
  apellido: string;
  cedula: string;
  direccion: string
}