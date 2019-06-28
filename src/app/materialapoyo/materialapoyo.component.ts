import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-materialapoyo',
  templateUrl: './materialapoyo.component.html',
  styleUrls: ['./materialapoyo.component.css']
})
export class MaterialapoyoComponent implements OnInit {
  private materiales = [];
 
  constructor( private HttpClient : HttpClient ) { }

  ngOnInit() {

    this.get_materiales()
  }

  get_materiales(){
    this.HttpClient.get('http://104.248.253.159:8080/material/list').subscribe((res: any[])=>{
        
        this.materiales = res;
        console.log(this.materiales);
    });
}

}
