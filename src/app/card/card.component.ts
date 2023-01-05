import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public image:string="https://enciclopedia.net/wp-content/uploads/2013/03/carta.jpg";
  public Titulo:string="Curso de Angular interpolacion ";
  ngOnInit(): void {
    
  }
}
