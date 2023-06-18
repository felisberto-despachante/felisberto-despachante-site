import {Component} from "@angular/core";

@Component({
  selector: 'app-arquivos',
  templateUrl: './arquivos.component.html',
  styleUrls: ['./arquivos.component.scss']
})
export class ArquivosComponent {
  mapFileName: Map<string, string> = new Map<string, string>([
    ['procuracao-pf', 'Procuracao_CRDDBA_PF'],
    ['procuracao-pj', 'Procuracao_CRDDBA_PJ'],
    ['declaracao-residencia', 'DECLARACAO DE DOMICILIO'],
    ['requerimento-unico', 'REQUERIMENTO UNICO']
  ]);


  downloadDocument(docName: string, docType: string) {
    const fileUrl = `/documentos/`;

    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = `${this.mapFileName.get(docName)}.${docType}`;
    link.target = '_blank';

    link.dispatchEvent(new MouseEvent('click'));
  }
}
