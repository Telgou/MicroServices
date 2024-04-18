import { EnumStatut } from "./EnumStatut";

export class Reservations {
  idreservation!: number;
  idClient!:number;
  duree!:number;
  statut!:EnumStatut;
  montant!:number;

}
