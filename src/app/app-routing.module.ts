import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Web1Component } from './web1/web1.component';
import { Quizmiddle1Component } from './quizmiddle1/quizmiddle1.component';
import { Quizmiddle2Component } from './quizmiddle2/quizmiddle2.component';
import { Quizmiddllee2Component } from './quizmiddllee2/quizmiddllee2.component';
import { Quizmiddle3Component } from './quizmiddle3/quizmiddle3.component';


const routes: Routes = [
  {path: '', component: Web1Component, pathMatch: 'full'},
  {path: 'newQuiz', component: Quizmiddle1Component, pathMatch: 'full'},
  {path: 'Outcomes', component: Quizmiddle2Component, pathMatch: 'full'},
  {path: 'Outcomes2', component: Quizmiddllee2Component, pathMatch: 'full'},
  {path: 'Questions', component: Quizmiddle3Component, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
