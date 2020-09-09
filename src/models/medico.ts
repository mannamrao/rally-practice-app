import { IUser } from "./user";
import { IAddress } from "./address";
import { ISpeciality } from "./speciality";

export interface IMedico {
  user: IUser;
  address: IAddress;
  specialities: ISpeciality[];
}
