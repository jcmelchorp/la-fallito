import { getUser } from 'src/app/auth/store/auth.selectors';
import { getAuthState } from './../../../auth/store/auth.selectors';
import { Anounce } from '../../models/anounce.model';
import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { Observable } from 'rxjs';
import { Course } from 'src/app/courses/models/course.model';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { map } from 'rxjs/operators';
import { getAllLoaded, getCourses } from 'src/app/courses/store/courses.selectors';
import { AngularFireAuth } from '@angular/fire/auth';
import * as fromCourses from '../../../courses/store/courses.actions';
import { User } from 'src/app/auth/models/user.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  plus = faPlus;
  question = faQuestionCircle;
  cardItems: Anounce[] = [
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
  courses$: Observable<Course[] | null>;
  user$: Observable<User | null>;
  isLoading$: Observable<boolean>;
  constructor(
    private afAuth: AngularFireAuth,
    private store: Store<AppState>
  ) { }

  get user() {
    return this.afAuth.currentUser;
  }

  ngOnInit() {
    this.isLoading$ = this.store.select(getAllLoaded);
    this.courses$ = this.store.pipe(
      select(getCourses),
      map((courses: Course[]) => {
        if (this.user && !courses) {
          this.store.dispatch(new fromCourses.CoursesQuery());
        }
        return courses;
      })
    );

  }

}
