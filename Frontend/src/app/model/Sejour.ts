import { Chambre } from 'src/app/model/Chambre';
import { Status } from "./Status";

export class Sejour {
  idHistSejour!: number;
  dateArrivee!: Date;
  dateDepart!: Date;
  cout!: number;
  statutSejour!:Status;
  chambre!:Chambre;
  numChambre!:number;

}
