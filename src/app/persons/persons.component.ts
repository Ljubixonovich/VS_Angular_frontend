import { Component, OnInit } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Person } from './person';
import { PersonApiServicesService } from './person-api-services.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  persons: Person[] = [];
  selectedPerson: Person;
  url = "http://localhost:53900/api/People";

  constructor(private http: Http, private personService: PersonApiServicesService) { }

  ngOnInit() {
    this.getAll();
  }


  getAll() {
    this.http.get(this.url).subscribe((response: Response) => {
      this.persons = response.json();
    })
  }

  deleteOne(id: number) {
    this.http.delete(this.url + '/' + id).subscribe((response: Response) => {
      this.getAll();
    })
  }

  addNewPerson() {
    let newPerson = {name: "Djoka", age: 78};
    let header1 = new Headers({'Content-Type': 'application/json'});

    return this.http.post(this.url, newPerson, {headers: header1})
    .subscribe((response: Response) => {
      this.getAll();    
    });
  
  }
}
