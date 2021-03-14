import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextComponent } from './text/text.component';
import { VaildComponent } from './vaild/vaild.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/vaild' },
  {path:'vaild',component:VaildComponent},
  {path:'text',component:TextComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
