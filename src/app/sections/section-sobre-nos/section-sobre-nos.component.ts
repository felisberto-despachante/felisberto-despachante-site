import { Component } from '@angular/core';
import {LinksService} from "../../services/links.service";

@Component({
  selector: 'app-section-sobre-nos',
  templateUrl: './section-sobre-nos.component.html',
  styleUrls: ['./section-sobre-nos.component.scss']
})
export class SectionSobreNosComponent {

  constructor(private linksService: LinksService) {
  }

  openWhatsapp(){
    this.linksService.openWhatsApp();
  }
}
