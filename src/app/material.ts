import {NgModule} from '@angular/core';
import {
  MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCheckboxModule,
  MatCardModule, MatFormFieldModule, MatInputModule, MatGridListModule, MatDatepickerModule, MatSelectModule, MatSlideToggleModule,
  MatTableModule

} from '@angular/material';

@NgModule({
  imports : [MatButtonModule, MatCheckboxModule , MatToolbarModule , MatSidenavModule ,
    MatIconModule , MatListModule , MatCardModule , MatFormFieldModule , MatInputModule
  , MatGridListModule , MatDatepickerModule , MatSelectModule ,
      MatSlideToggleModule , MatTableModule, MatCheckboxModule],
  exports : [MatButtonModule, MatCheckboxModule , MatToolbarModule , MatSidenavModule ,
    MatIconModule , MatListModule , MatCardModule , MatFormFieldModule , MatInputModule,
    MatGridListModule , MatDatepickerModule ,
      MatSelectModule , MatSlideToggleModule , MatTableModule , MatCheckboxModule]
})
export class MaterialModule { }
