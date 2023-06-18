import {Component} from '@angular/core';
import {LinksService} from '../../services/links.service';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss']
})
export class SectionOneComponent {
  constructor(private linksService: LinksService) {
  }

  openWhatsapp(){
    this.linksService.openWhatsApp();
  }
}
