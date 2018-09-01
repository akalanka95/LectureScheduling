import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {StudentService} from '../../../services/student.service';
import {LectureService} from '../../../services/lecture.service';
import {Lecture} from '../../../models/Lecture.model';
import {Student} from '../../../models/Student.model';

@Component({
  selector: 'app-lectures-detail',
  templateUrl: './lectures-detail.component.html',
  styleUrls: ['./lectures-detail.component.scss']
})
export class LecturesDetailComponent implements OnInit {

  lecturesList: Lecture[] = [];
  constructor(private lectureService: LectureService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
      this.lectureService.getListOfLectures()
          .subscribe(
              (lectures: any[]) => {
                  this.lecturesList = lectures;
              },
              (error) => console.log(error)
          )
  }
    /*onEditLecture(lecture: Lecture) {
        this.passStudent = student;
        return this.router.navigate(['edit'], {relativeTo: this.route});
        /!*this.lectureService.newEmitter.emit(lecture);*!/
    }*/

}
