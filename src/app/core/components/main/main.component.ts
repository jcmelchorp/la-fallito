import { Component, OnInit } from '@angular/core';
import { CardItemContent } from '../../models/cardItemContents';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  cardItems: CardItemContent[] = [
    {
      title: 'Matemáticas - Tarea 2',
      subtitle: '15 de julio de 2020 a las 18:00hrs',
      description:
        'Resolver ejercicios propuestos',
      route_link: '/information/homework',
      imageUrl: 'assets/carousel/main-banner-01.jpg',
    },
    {
      title: 'Matemáticas - Examen parcial 2',
      subtitle: '22 de julio de 2020',
      description: 'Ya esta la fecha para el segundo examen parcial. Traigan su santo preferido',
      route_link: '/information/return-to-normal',
      imageUrl: 'assets/carousel/main-banner-02.jpg',
    },
    {
      title: 'Español - Tarea 5',
      subtitle: '18 de julio de 2020 a las 14:00hrs',
      description:
        'Ejercicios para el examen',
      route_link: '/information/covid-risk',
      imageUrl: 'assets/carousel/main-banner-03.jpg',
    },
    {
      title: 'Español - Sesión en linea',
      subtitle: '17 de julio de 2020 a las 15:00hrs',
      description:
        'Se resolverán dudas via Zoom. ID:426436245125346',
      route_link: '/information/covid-risk',
      imageUrl: 'assets/carousel/main-banner-04.jpg',
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
