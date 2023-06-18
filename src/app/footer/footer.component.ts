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

  openWhatsapp(){
    this.linksService.openWhatsApp();
  }
}
