import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonsComponent } from './persons/persons.component';
import { PersonEditComponent } from './persons/person-edit/person-edit.component';
import { PersonDetailsComponent } from './persons/person-details/person.component';

const routes: Routes = [
  { path: "persons", component: PersonsComponent, children: [
    { path: 'new', component: PersonEditComponent },
    { path: ':id', component: PersonDetailsComponent },
 
    { path: ':id/edit', component: PersonEditComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
