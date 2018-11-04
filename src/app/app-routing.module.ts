import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonsComponent } from './persons/persons.component';
import { PersonComponent } from './persons/person/person.component';

const routes: Routes = [
  { path: "persons", component: PersonsComponent, children: [
    { path: ':id', component: PersonComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
