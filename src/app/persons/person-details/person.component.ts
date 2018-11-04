import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Person } from '../person';
import { ActivatedRoute, Params } from '@angular/router';
import { PersonApiServicesService } from '../person-api-services.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonDetailsComponent implements OnInit {

  person: Person;
  url = "http://localhost:53900/api/People";

  constructor(private http: Http, private currentRoute: ActivatedRoute,
    private personService: PersonApiServicesService) { }

  ngOnInit() {
    const id = +this.currentRoute.snapshot.params['id'];
    this.http.get(this.url + '/' + id).subscribe((response: Response) => {
      this.person = response.json();
    });

    this.currentRoute.params.subscribe(
      (params: Params) => {
        this.http.get(this.url + '/' + +params['id']).subscribe((response: Response) => {
          this.person = response.json();
        });
      }
    );
  }

}
