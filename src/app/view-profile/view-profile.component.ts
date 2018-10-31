import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {

    active = 'Add Lecture';
    activeId = 'lecture';
    addButton = false;
    constructor() {
    }

    ngOnInit() {

    }
    activeTab(text: string, textId: string) {
        this.addButton = false;
        this.active = text;
        this.activeId = textId;
        if ( text === 'Add DepartmentRef') {
            this.addButton = true;
        }
    }

}
