import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {HomeComponent} from "./home/home.component";
import {ArquivosComponent} from "./arquivos/arquivos.component";
import { SectionOneComponent } from './sections/section-one/section-one.component';
import { SectionLicenciamentoComponent } from './sections/section-licenciamento/section-licenciamento.component';
import { SectionSobreNosComponent } from './sections/section-sobre-nos/section-sobre-nos.component';
import { SectionFourComponent } from './sections/section-four/section-four.component';
import { SectionServicosComponent } from './sections/section-servicos/section-servicos.component';
import {NgOptimizedImage} from "@angular/common";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArquivosComponent,
    SectionOneComponent,
    SectionLicenciamentoComponent,
    SectionSobreNosComponent,
    SectionFourComponent,
    SectionServicosComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
