import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { environment } from '../../../environments/environment';
import { AngularFireAuth } from '@angular/fire/auth';
import { Course } from '../models/course.model';
import { of } from 'rxjs';
import { stringToKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  url = environment.firebase.databaseURL;
  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) { }
  get userId() {
    let output = '';
    if (this.afAuth.currentUser) {
      this.afAuth.currentUser.then(cu => {
        output = cu.uid;
      })
    }
    return output;
  }
  add(course: Course, userId: string) {
    const courses = this.db.list(`courses/${userId}`);
    return courses.push(course);
  }

  addCourses(courses: Course[]) {
    const userId = this.userId;
    courses.forEach((course: Course) => {
      this.db.list(`courses/${userId}`).push(course);
    });
  }

  get(userId: string) {
    return this.db.list(`courses/${userId}`).snapshotChanges();
  }

  update(course: Course, userId: string) {
    return of(this.db.object(`courses/${userId}/` + course.key)
      .update({
        title: course.title,
        description: course.description,
        levelId: course.levelId
      }));
  }

  delete(course: Course, userId: string) {
    return this.db.object(`courses/${userId}/` + course.key).remove();
  }
}
