import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./home/home.component";
import {ArquivosComponent} from "./arquivos/arquivos.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'arquivos', component: ArquivosComponent},
  {path: '**', redirectTo: 'home'}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
