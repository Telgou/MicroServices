import { Chambre } from "./Chambre";

export class EtatProp{
  idEtat!:number;
  etat!:String;
  dateNettoyage!:Date;
  personnel!:String;
  chambre!:Chambre;
}
