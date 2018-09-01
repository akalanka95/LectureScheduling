import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './components/login/login.component';
import {MaterialModule} from './material';
import {LoginService} from './services/login.service';
import {StudentService} from './services/student.service';
import {CalendarModule} from 'angular-calendar';
import { FlatpickrModule } from 'angularx-flatpickr';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DepartmentService} from './services/department.service';
import {LectureService} from './services/lecture.service';
import {DayService} from './services/day.service';
import {TimeService} from './services/time.service';
import {LectureHallService} from './services/lecture-hall.service';
import {CourseService} from './services/course.service';
import {SemesterService} from './services/semester.service';
import {TimeTableService} from './services/time-table.service';
import { AttendanceComponent } from './attendance/attendance.component';
import { AddLectureComponent } from './view-profile/lecturer/add-lecture/add-lecture.component';
import { DepartmentTimeTableComponent } from './time-table/department-time-table/department-time-table.component';
import {AttendanceService} from './services/attendance.service';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
      ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
      MaterialModule,
      AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
      LoginComponent

  ],
  providers: [LoginService , StudentService ,
      DepartmentService , LectureService , DayService ,
  TimeService , LectureHallService , CourseService , SemesterService
  , TimeTableService , AttendanceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
