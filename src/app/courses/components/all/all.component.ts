import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course.model';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {
  link = faExternalLinkAlt;
  courses: Course[] = [
    {
      title: 'Matemáticas 1',
      teacherId: 'Julio César Melchor Pinto',
      description:
        'Preálgebra',
      level: 'Secundaria'
    },
    {
      title: 'Matemáticas 2',
      teacherId: 'Julio César Melchor Pinto',
      description: 'Principios de álgebra y plano cartesiano',
      level: 'Secundaria'

    },
    {
      title: 'Matemáticas 3',
      teacherId: 'Julio César Melchor Pinto',
      description:
        'Álgebra',
      level: 'Secundaria'

    },
    {
      title: 'Fisicoquímica',
      teacherId: 'Julio César Melchor Pinto',
      description:
        'La materia y sus transformaciones',
      level: 'Secundaria'
    },
    {
      title: 'Física 1',
      teacherId: 'Julio César Melchor Pinto',
      description:
        'Cinemática y dinámica',
      level: 'Secundaria'

    },
    {
      title: 'Fisica 2',
      teacherId: 'Julio César Melchor Pinto',
      description:
        'Óptica, electromagnetismo y física aplicada',
      level: 'Secundaria'

    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
