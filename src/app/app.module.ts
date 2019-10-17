import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WorkAreaComponent } from './work-area/work-area.component';
import { SubjectListComponent } from './work-area/subject-list/subject-list.component';
import { StudentListComponent } from './work-area/student-list/student-list.component';
import {FormsModule} from '@angular/forms';
import { StudentItemComponent } from './work-area/student-list/student-item/student-item.component';
import { SubjectItemComponent } from './work-area/subject-list/subject-item/subject-item.component';
import {DataService} from './data.service';
import { RecordsListComponent } from './work-area/records-list/records-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorkAreaComponent,
    SubjectListComponent,
    StudentListComponent,
    StudentItemComponent,
    SubjectItemComponent,
    RecordsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
