import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import {
  trigger,
  transition,
  animate,
  style,
  state,
} from '@angular/animations';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  animations: [
    trigger('fadeInOutAnimation', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [style({ opacity: 0 }), animate(600)]),
    ]),
  ],
})
export class CoursesComponent implements OnInit {
  menu = faBars;
  mediaSub: Subscription;
  deviceSm: boolean;
  deviceSize: string;
  constructor(public mediaObserver: MediaObserver) { }

  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.media$.subscribe(
      (result: MediaChange) => {
        this.deviceSize = result.mqAlias;
        this.deviceSm = result.mqAlias === 'sm' || result.mqAlias === 'xs' ? true : false;
      }
    );
  }
}
