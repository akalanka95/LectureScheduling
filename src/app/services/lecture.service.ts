import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Student} from '../models/Student.model';
import {Lecture} from '../models/Lecture.model';

@Injectable({
  providedIn: 'root'
})
export class LectureService {

    constructor(private http: HttpClient) { }
    getListOfLectures() {
        const url = 'http://localhost:8080/lectures/findAll';
        return this.http.get
        (url, { headers: new HttpHeaders({'x-auth-token' : localStorage.getItem('xAuthToken').valueOf().substring(10, 46) })
        });
    }
    updateLectureList(updateLectureList: Lecture[]) {
        const url = 'http://localhost:8080/lectures/updateAll';
        return this.http.put
        (url, updateLectureList , { headers: new HttpHeaders({'x-auth-token' : localStorage
                    .getItem('xAuthToken').valueOf().substring(10, 46) })
        });

    }

    postNewLecture(newLecture: Lecture) {
        const url = 'http://localhost:8080/lectures/addLecture';
        return this.http.post
        (url, newLecture, { headers: new HttpHeaders({'x-auth-token' : localStorage
                    .getItem('xAuthToken').valueOf().substring(10, 46) })
        });

    }
}
