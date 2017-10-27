import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/Rx';

import { AppComponent } from './app.component';
import { EmpComponent } from './employee/emp/emp.component';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';

import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import {DetailsService} from './details.service';

const appRoutes:Routes= [
  
    {path:'student',component:StudentComponent},
    {path:'teacher',component:TeacherComponent},
    {path:'',redirectTo:'',pathMatch:'full'},
    

  
  ];


@NgModule({
  declarations: [
    AppComponent,
    EmpComponent,
   
    StudentComponent,
    TeacherComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2FilterPipeModule,
    RouterModule.forRoot(appRoutes),
  ],


  providers: [DetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
