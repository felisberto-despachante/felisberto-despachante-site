import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinksService {

  constructor() { }

  public openWhatsApp(number?: string) {
    const zapUrl = 'https://wa.me/5577';
    if (number)
      window.open(zapUrl+number, '_blank');
    else
      window.open(zapUrl + '999378918', '_blank');
  }
}
