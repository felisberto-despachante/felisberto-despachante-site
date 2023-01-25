import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {InicioComponent} from "./inicio/inicio.component";
import {ServicosComponent} from "./servicos/servicos.component";
import {ContatosComponent} from "./contatos/contatos.component";
import {SobreNosComponent} from "./sobre-nos/sobre-nos.component";
import {FormulariosComponent} from "./formularios/formularios.component";
import {LinksComponent} from "./links/links.component";

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'servicos', component: ServicosComponent},
  {path: 'contatos', component: ContatosComponent},
  {path: 'sobre-nos', component: SobreNosComponent},
  {path: 'formularios', component: FormulariosComponent},
  {path: 'links', component: LinksComponent},
  {path: '**', redirectTo: ''}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
