import { Component, OnInit } from '@angular/core';
import {DetailsService } from '../details.service';
import { PercentPipe } from '@angular/common';
import { Directive, ElementRef, HostListener, Input } from '@angular/core';


@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
  
})
export class TeacherComponent {
 
  private details;
 
  
  show=true;
 
  
  
constructor(private _detailsservice : DetailsService) { 
this.details = _detailsservice.getDetails();




  }
  showDetail(){
    this.show=!this.show;
  }
  
    clicked(index) {// only show clicked img info 
      console.log(this.details[index]);
      this.details[index].show = !this.details[index].show;
    };

   
  


 

}