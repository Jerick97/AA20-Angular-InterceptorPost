import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  posting : any = []; //array con los post obtenidos desde la api
  Mostrar: boolean = false;
  page: number = 1; //página actual
  date = new Date(); //Fecha actual
  constructor(private postingService:PostService) { } //inyectamos nuestro servicio

  ngOnInit(): void {
  }

  MostrarPost(){
    this.postingService.getPost().subscribe(
      resultado => {
        this.posting = resultado; //si todo es correcto, guarda la data en el array posting
        this.Mostrar = !this.Mostrar; //Mostrar los cards
      },
      error => {
        console.log(error); //en caso de error, imprimirlo en consola
      })
    }
}
