export interface Client {
  id: number,
  idIcaav: string,
  name: String,
  lastName: String,
  contact: String,
  additionalInfo: String,
  type: string,
  socialReason: string,
  rfc: string,
  fiscalAddress: string,
  secturNumber: string,
  ownerName: string,
  email: string,
  commercialAddress: string,
  phone: string,
  cellphone: string
  status: string
}

export interface User {
  id?: number;
  idClient: number;
  name: string;
  lastName: string;
  email: string;
  status: string;
  password?: string;
  type: string;
}

export interface Password {
  idUser: number,
  password: String,
}
