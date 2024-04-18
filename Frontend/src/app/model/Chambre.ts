import { EtatProp } from 'src/app/model/EtatProp';
import { TypeChambre } from "./typeChambre";

export class Chambre{
  idChambre!: number;
  typeC!: TypeChambre;
  etage!: number;
  tarif!: number;
  etatProp!:EtatProp;
  numChambre!: number ;

}
