import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdventurerViewComponent } from './adventurer-view/adventurer-view.component'

const routes: Routes = [
    { path: '', component: AdventurerViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
