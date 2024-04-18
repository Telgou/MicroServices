import { Restaurant } from "./Restaurant";

export class Tables {
  idTable!: number;
  numTable!: number;
  nbplaceT!: number;
  etatT!: string;
  cuisine!: string;
  reservation!: Date;
  idRestaurant!: number;
  restaurant?: Restaurant | undefined; // Include undefined in the type

  // Additional method to set restaurant ID
}
