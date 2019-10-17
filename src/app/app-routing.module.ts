import { MestreComponent } from './mestre/mestre.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: '', redirectTo: '/mestre', pathMatch: 'full' },
    { path: 'mestre', component: MestreComponent },
    { path: 'detalhes', component: DetalhesComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }