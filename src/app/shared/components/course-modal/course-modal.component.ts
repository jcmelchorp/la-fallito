import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Subject } from 'rxjs';
import { Course } from '../../../courses/models/course.model';
import { FormControl, FormGroup, ControlContainer, Form, NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Level } from 'src/app/courses/models/level.enum';

@Component({
  selector: 'app-course-modal',
  templateUrl: './course-modal.component.html',
  styleUrls: ['./course-modal.component.scss']
})
export class CourseModalComponent implements OnInit {
  @ViewChild('courseForm', { static: true }) courseForm: NgForm;
  levels = [
    { id: 1, name: 'Primaria' },
    { id: 2, name: 'Secundaria' },
    { id: 3, name: 'Docencia' },
    { id: 4, name: 'Padres de familia' },
    { id: 5, name: 'No especificado' }
  ];
  courseData: Subject<Course> = new Subject();
  course: Course = { title: '', description: '', levelId: 0 };
  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<CourseModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Course) { }



  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSave() {
    if (this.courseForm.valid) {
      this.courseData.next(this.course);
      this.dialog.closeAll();
    }
  }
}
