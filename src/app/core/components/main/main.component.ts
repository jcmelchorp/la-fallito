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
      title: 'Anonunce 1',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi blanditiis. Officiis nihil rem aut molestias illum eos!',
      route_link: '/information/covid-risk',
      imageUrl: 'assets/carousel/main-banner-01.jpg',
    },
    {
      title: 'Anonunce 2',
      description: 'Similique porro labore commodi impedit deserunt? Officiis nihil rem aut molestias illum eos!',
      route_link: '/information/return-to-normal',
      imageUrl: 'assets/carousel/main-banner-02.jpg',
    },
    {
      title: 'Anonunce 3',
      description:
        'Distinctio similique pariatur, at sint nemo quidem commodi vel rerum aliquid quibusdam?',
      route_link: '/information/covid-risk',
      imageUrl: 'assets/carousel/main-banner-03.jpg',
    },
    {
      title: 'Anonunce 4',
      description:
        'Animi blanditiis, assumenda dolorem possimus id qui ut eaque. Similique porro labore commodi impedit deserunt?',
      route_link: '/information/covid-risk',
      imageUrl: 'assets/carousel/main-banner-04.jpg',
    },
    {
      title: 'Anonunce 5',
      description:
        'Animi blanditiis, assumenda dolorem possimus id qui ut eaque. Similique porro labore commodi impedit deserunt?',
      route_link: '/information/covid-risk',
      imageUrl: 'assets/carousel/main-banner-05.jpg',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
