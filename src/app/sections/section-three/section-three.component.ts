import { Component } from '@angular/core';
import {LinksService} from "../../services/links.service";

@Component({
  selector: 'app-section-three',
  templateUrl: './section-three.component.html',
  styleUrls: ['./section-three.component.scss']
})
export class SectionThreeComponent {

  constructor(private linksService: LinksService) {
  }

  openWhatsapp(){
    this.linksService.openWhatsApp();
  }
}
