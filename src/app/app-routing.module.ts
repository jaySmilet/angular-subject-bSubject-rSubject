import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ExComponent } from './ex/ex.component';
import { C1Component } from './main/c1/c1.component';
import { RsComponent } from './rs/rs.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children:[
      {
        path:'c1',
        component:C1Component
      }
    ]
  },
  {
    path: 'ex',
    component: ExComponent,
  },
  {
    path: 'rs',
    component: RsComponent,
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}
