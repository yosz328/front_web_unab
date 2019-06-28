import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import * as _ from 'lodash';



@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {
  
  private teachers  = []; 
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.get_teachers()
  }

  get_teachers(){
    this.httpClient.get('http://104.248.253.159:8080/teachers/list').subscribe((res: any[])=>{
        
        this.teachers = res;
        console.log(this.teachers);
    });
}
}
