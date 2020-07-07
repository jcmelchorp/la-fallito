import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformationComponent } from './information.component';
import { MenuComponent } from './components/menu/menu.component';


const routes: Routes = [
  {
    path: '',
    component: InformationComponent,
    children: [
      { path: 'menu', component: MenuComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformationRoutingModule { }
