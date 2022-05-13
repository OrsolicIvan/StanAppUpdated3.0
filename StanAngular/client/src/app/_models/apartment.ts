import { IAdress } from "./adress";
import { Photo } from "./photo";

export interface Apartment{
    id: number;
    apartmentDescription: string;
    numberOfRooms: number;
    monthlyPrice: number;
    ownerId: number;
    adress : IAdress[]
   
    photos : Photo[]
}
export class ApartmentClass{
    apartmentDescription: string="";
    numberOfRooms: number=0;
    monthlyPrice: number=0;
    ownerId: number=0;
}
