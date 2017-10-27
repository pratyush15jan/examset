import { Injectable } from '@angular/core';

@Injectable()
export class DetailsService {
  private details;

  constructor() {
this.details= [
{
id:1,
fname:'Pratysh',
lname:'Singh',
address:'Banglore',
p:35,
m:41,
c:45
},
{
  id:2,
  fname:'David',
  lname:'Moore',
  address:'Delhi',
  p:32,
  m:41,
  c:46
  },

  {
    id:3,
    fname:'Shekhar',
    lname:'Sharma',
    address:'Delhi',
    p:37,
    m:36,
    c:43
    }

];
  } 


   
   
   getDetails(){
    
     return this.details;
   }
   }

