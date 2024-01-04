import { Injectable } from '@angular/core';

export const MONTHS_ES = {
  JANUARY: 'ENERO',
  FEBRUARY: 'FEBRERO',
  MARCH: 'MARZO',
  APRIL: 'ABRIL',
  MAY: 'MAYO',
  JUNE: 'JUNIO',
  JULY: 'JULIO',
  AUGUST: 'AGOSTO',
  SEPTEMBER: 'SEPTIEMBRE',
  OCTOBER: 'OCTUBRE',
  NOVEMBER: 'NOVIEMBRE',
  DECEMBER: 'DICIEMBRE',
}

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  getActualMonth(): any {
    let dt = new Date();
    let month = dt.getMonth();
    let i = 0;
    for (const prop in MONTHS_ES) {
      if (i == month) {
        return MONTHS_ES[prop as keyof typeof MONTHS_ES];
      }
      i++;
    }
  }

  getMonthList(): string[] {
    let months: string[] = [];
    for (const prop in MONTHS_ES) {
      months.push(MONTHS_ES[prop as keyof typeof MONTHS_ES]);
    }
    return months;
  }
}
