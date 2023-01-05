import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

interface Tarjeta{
  titulo:string;
  subtitulo:string;
  nro?:number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'PrimerApp';

  constructor(public translate: TranslateService){
    this.translate.addLangs(['es' , 'en']);
    this.translate.setDefaultLang('es');
    //es para que se use el idioma en ingles this.translate.use('en');
  }
  
  public Arreglotargetas: Tarjeta[]= []
  
  ngOnInit(): void {
    this.Arreglotargetas = [
      {titulo: 'Video 1', subtitulo: 'Sbutitulo Video 1', nro:5},
      {titulo: 'Video 2', subtitulo: 'Sbutitulo Video 2'},
      {titulo: 'Video 3', subtitulo: 'Sbutitulo Video 3'},
    ]
  }
}