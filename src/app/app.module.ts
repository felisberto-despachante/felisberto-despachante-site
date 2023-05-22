import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {HomeComponent} from "./home/home.component";
import {ArquivosComponent} from "./arquivos/arquivos.component";
import { SectionOneComponent } from './sections/section-one/section-one.component';
import { SectionTwoComponent } from './sections/section-two/section-two.component';
import { SectionThreeComponent } from './sections/section-three/section-three.component';
import { SectionFourComponent } from './sections/section-four/section-four.component';
import { SectionServicosComponent } from './sections/section-servicos/section-servicos.component';
import {NgOptimizedImage} from "@angular/common";
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArquivosComponent,
    SectionOneComponent,
    SectionTwoComponent,
    SectionThreeComponent,
    SectionFourComponent,
    SectionServicosComponent,
    HeaderComponent
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
