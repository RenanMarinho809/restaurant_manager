export interface User {
    email: string;
    role: string;
  }

export interface Usuario {
  id: number;
  nome: String;
  email: String;
  senha: String;
  role: String;
  reservas: number;
}

export interface Mesa {
  id: number;
  nome: String;
  capacidade: number;
  status: String;
  reservas: number;
}

export interface Reserva {
  id           : number;
  usuario_id :  number;
  mesa_id   :   number;
  data_reserva : String;
  status    :   String;
  usuario   :  number;
  mesa      :   number;
}