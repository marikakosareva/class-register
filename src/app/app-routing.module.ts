import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentListComponent} from './work-area/student-list/student-list.component';
import {SubjectListComponent} from './work-area/subject-list/subject-list.component';
import {AuthComponent} from './auth/auth/auth.component';


const routes: Routes = [
  {path: 'subjects', component: SubjectListComponent},
  {path: 'students', component: StudentListComponent},
  {path: 'students/:index', component: StudentListComponent},
  {path: 'auth', component: AuthComponent},
  {path: '**', redirectTo: 'auth'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
