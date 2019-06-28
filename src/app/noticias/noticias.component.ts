import { Component, OnInit } from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import * as _ from 'lodash';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  private noticias = [];
  
  constructor( private HttpClient : HttpClient) { }

  ngOnInit() {
    this.get_noticias()
  }

  get_noticias(){
    this.HttpClient.get('http://104.248.253.159:8080/news/list').subscribe((res: any[])=>{
        
        this.noticias = res;
        console.log(this.noticias);
    });
}
}
