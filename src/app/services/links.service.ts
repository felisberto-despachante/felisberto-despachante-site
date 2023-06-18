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
      window.open(zapUrl + '999378918?text=Olá%20Igor,%20tudo%20bem?%20Vim%20pelo%20site%20do%20Felisberto%20Despachante', '_blank');
  }

  openInstagram() {
    window.open('https://www.instagram.com/felisbertodespachante/', '_blank');
  }
}
