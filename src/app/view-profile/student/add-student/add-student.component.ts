import {Component, OnInit, ViewChild} from '@angular/core';
import {StudentService} from '../../../services/student.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Student} from '../../../models/Stuent.model';
import {NgForm} from '@angular/forms';
import {Department} from '../../../models/Department.model';
import {DepartmentService} from '../../../services/department.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
    // passedStudent: Student;
    @ViewChild('f') addLectureForm: NgForm;
    departmentList: Department [] = [];
    addOrEdit = true;
    buttonName = 'Add Lecture';
    isFocused = ' ';
    studentId: number;
    studentName: string;
    studentEmail: string;
    studentAddres: string;
    studentContact: string ;
    studentRole: string ;
    studentDepartment: Department = null;
    studentObject: Student = new Student();
    selectedFile: File = null;
  constructor(private studentService: StudentService,
              private departmentService: DepartmentService,
              private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient) { }

  ngOnInit() {
    /*this.passedStudent = this.studentService.passingStudent;
    if (this.passedStudent != null) {
        this.isFocused = 'is-focused';
        this.buttonName = 'Update';
        this.addOrEdit = false;
        this.student = this.passedStudent;
    }*/
      this.departmentService.getListOfDepartments()
          .subscribe(
              (departmentList: any[]) => {
                  this.departmentList = departmentList;
              },
              (error) => console.log(error)
          );
  }
    onSubmit(form: NgForm) {
        console.log(form);
        this.studentObject.fullName = this.studentName;
        this.studentObject.department = this.studentDepartment;
        this.studentObject.contact = this.studentContact;
        this.studentObject.address = this.studentAddres;
        this.studentObject.email = this.studentEmail;
        this.studentObject.role = this.studentRole;
        this.studentObject.active = true;
        console.log(this.studentObject);
        const fd = new FormData();
        fd.append('file', this.selectedFile, 'ST' + this.studentName );
        this.http.post('http://localhost:8080/api/uploades/images', fd,
            {
                headers: new HttpHeaders({
                    'x-auth-token':
                        localStorage.getItem('xAuthToken').valueOf().substring(10, 46)
                })
            }).subscribe(res => {
                console.log(res);
                console.log(res);
                console.log(res);
                console.log(res);
                console.log(res);
            },
            (error) => console.log(error)
        );

        if (this.addOrEdit) {
            this.studentService.postNewStudent(this.studentObject)
                .subscribe(
                    (response) => console.log(response),
                    (error) => console.log(error)
                );
            this.addLectureForm.resetForm();
        } else {
            this.studentObject.id = this.studentId;
            this.studentService.updateStudent(this.studentObject)
                .subscribe(
                    (response) => console.log(response),
                    (error) => console.log(error)
                );
        }
    }
    selectDepartment(departments) {
        console.log(departments);
        this.studentDepartment = departments;
    }

    onFileSelcted(event) {
        this.selectedFile = <File>event.target.files[0];
        console.log(this.selectedFile);
    }

}
