import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { PersonApiServicesService } from '../person-api-services.service';
import { Http, Headers } from '@angular/http';
import { Person } from '../person';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent implements OnInit {
  @ViewChild('f') persForm: NgForm;
  id: number;
  editMode = false;
  url = "http://localhost:53900/api/People";
  header = new Headers({'Content-Type': 'application/json'});
  person: Person;

  constructor(private currentRoute: ActivatedRoute, 
    private personSevice: PersonApiServicesService,
    private http: Http) { }

  ngOnInit() {
    this.currentRoute.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        
        this.http.get(this.url+'/'+this.id);
        console.log('editMode: ' + this.editMode);
      }
    );
  }


  onSubmit() {
    if (this.editMode === true) {
      return this.http.put(this.url + '/' + this.id, {
        id: this.id,
        name: this.persForm.value['name'],
        age: this.persForm.value['age']
      }, {headers: this.header})
      .subscribe(()=>{console.log()},
      (error)=>{console.log(error)})

      console.log(this.persForm.value['name']);
    }
    else {
      return this.http.post(this.url, {
        name: this.persForm.value['name'],
        age: this.persForm.value['age']
      }, {headers: this.header})
      .subscribe(()=>{console.log()},
      (error)=>{console.log(error)})

      
      console.log(this.persForm.value['name']);
    }
  }




  // varijanta Servis poziva
  // onSubmit() {
  //   this.editMode === true ?
  //     this.personSevice.editOne({
  //       id: this.persForm.value['id'],
  //       name: this.persForm.value['name'], 
  //       age: this.persForm.value['age']
  //     }) :
  //     this.personSevice.addOne({
  //       name: this.persForm.value['name'], 
  //       age: this.persForm.value['age']
  //     })
  // }

}
