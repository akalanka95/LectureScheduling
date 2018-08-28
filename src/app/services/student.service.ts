import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Student} from '../models/Stuent.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
    passingStudent: Student;

    constructor(private http: HttpClient) { }
    getListOfStudents() {
        const url = 'http://localhost:8080/students/findAll';
        return this.http.get
        (url, { headers: new HttpHeaders({'x-auth-token' : localStorage.getItem('xAuthToken').valueOf().substring(10, 46) })
        });
    }

    getStudentByID(studentId) {
        const url = 'http://localhost:8080/students/findById/' + studentId;
        return this.http.get
        (url, { headers: new HttpHeaders({'x-auth-token' : localStorage
                    .getItem('xAuthToken').valueOf().substring(10, 46) })
        });
    }
    postNewStudent(newStudent: Student) {
        const url = 'http://localhost:8080/students/addStudent';
        return this.http.post
        (url, newStudent, { headers: new HttpHeaders({'x-auth-token' : localStorage
                    .getItem('xAuthToken').valueOf().substring(10, 46) })
        });

    }
    updateStudent(updateStudent: Student) {
        const url = 'http://localhost:8080/students/updateStudent';
        return this.http.put
        (url, updateStudent , { headers: new HttpHeaders({'x-auth-token' : localStorage
                    .getItem('xAuthToken').valueOf().substring(10, 46) })
        });

    }
    deleteStudent(student: Student) {
        const url = 'http://localhost:8080/students/deleteStudent';
        return this.http.put
        (url, student , { headers: new HttpHeaders({'x-auth-token' : localStorage
                    .getItem('xAuthToken').valueOf().substring(10, 46) })
        });
    }
}
