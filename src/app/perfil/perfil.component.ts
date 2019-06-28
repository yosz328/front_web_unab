import { Component, OnInit, Input } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  value = '';
  onEnter(value: string) { this.value = value; }
  

  constructor(private HttpClient: HttpClient) { }

  ngOnInit() {
  
  }


get_datos(datos_s) {

  this.HttpClient.post('http://104.248.253.159:8080/rrss/twitter/post',{text: datos_s}).subscribe((res: any[])=>{
  console.log(datos_s)
});
}

}
