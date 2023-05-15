import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./home/home.component";
import {FuncionarioComponent} from "./funcionario/funcionario.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'funcionario', component: FuncionarioComponent},
  {path: '**', redirectTo: ''}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
