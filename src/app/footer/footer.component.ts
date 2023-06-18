import { Component } from '@angular/core';
import {LinksService} from "../services/links.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private linksService: LinksService) {
  }

  openExternalLink(link: string){
    switch (link) {
      case('whatsapp'):
        this.linksService.openWhatsApp();
        break;
      case('instagram'):
        this.linksService.openInstagram();
    }

  }
}
