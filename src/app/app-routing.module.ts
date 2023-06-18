import {RouterModule, Routes, ExtraOptions} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./home/home.component";
import {ArquivosComponent} from "./arquivos/arquivos.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'arquivos', component: ArquivosComponent},
  {path: '**', redirectTo: 'home'}
]
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: "enabled",
  anchorScrolling: "enabled"
}

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
