import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonApiServicesService {
  url = "http://localhost:53900/api/People";
  header = new Headers({'Content-Type': 'application/json'});
  persons: Person[] = [];

  constructor(private http: Http) { }

  getAll() {
    // this.http.get(this.url).subscribe((response: Response) => {
    //   return response.json();
    // })
    return this.http.get(this.url).subscribe((response: Response) => {
      return response.json();
    },
    (error) => {
      console.log(error);
    });
  }

  getOne(id: number) {
    this.http.get(this.url + '/' + id)
    .subscribe((response: Response) => {
      return response.json();
    },
    (error) => {
      console.log(error);
    });
  }

  addOne(person: {name: string, age: number}) {
    this.http.post(this.url, person, {headers: this.header})
    .subscribe((response: Response) => {},
    (error) => {
      console.log(error);
    });
  }

  editOne(person: Person) {
    this.http.put(this.url + '/' + person.id, person, {headers: this.header})
    .subscribe((response: Response) => {},
    (error) => {
      console.log(error);
    });
  }

  deleteOne(id: number) {
    this.http.delete(this.url + '/' + id).subscribe((response: Response) => {},
    (error) => {console.log(error);});
  }


}
