import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {ViewProfileComponent} from '../../view-profile/view-profile.component';
import {LecturesDetailComponent} from '../../view-profile/lecturer/lectures-detail/lectures-detail.component';
import {StudentDetailComponent} from '../../view-profile/student/student-detail/student-detail.component';
import {AddStudentComponent} from '../../view-profile/student/add-student/add-student.component';
import {TimeTableComponent} from '../../time-table/time-table.component';
import {CalanderComponent} from '../../calander/calander.component';
import {ScheduleComponent} from '../../schedule/schedule.component';
import {AttendanceComponent} from '../../attendance/attendance.component';
import {AddLectureComponent} from '../../view-profile/lecturer/add-lecture/add-lecture.component';
import {DepartmentTimeTableComponent} from '../../time-table/department-time-table/department-time-table.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'view-profile',   component: ViewProfileComponent , children : [
            {path : 'lectures', component : LecturesDetailComponent},
            {path : 'add/lecture', component : AddLectureComponent},
            {path : 'students', component : StudentDetailComponent},
            {path : 'add/student', component : AddStudentComponent},
            {path : 'students/edit', component : AddStudentComponent}]},
    { path: 'schedule',   component: ScheduleComponent },
    { path: 'event',   component: CalanderComponent },
    { path: 'timeTable',   component: TimeTableComponent, children : [
            {path : 'view/semester1/:id', component : DepartmentTimeTableComponent}
            ]},
    { path: 'attendance',   component: AttendanceComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
];
