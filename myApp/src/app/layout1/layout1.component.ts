import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout1',
  templateUrl: './layout1.component.html',
  styleUrls: ['./layout1.component.scss']
})
export class Layout1Component implements OnInit {

cards:Array<any>=[]  

  constructor() { 
    this.cards=[
      {
      id:1,
      title:"Flight Booking",
      img:"../../assets/feature3.jpg",
      desc:" the iterator function once for each item in obj collection, which can be either an object or an array. The iterator function is invoked with"
    },
   {
     id:2,
      title:"Flight Booking",
      img:"../../assets/feature3.jpg",
      desc:" the iterator function once for each item in obj collection, which can be either an object or an array. The iterator function is invoked with"
   },{
     id:3,
      title:"Flight Booking",
      img:"../../assets/feature3.jpg",
      desc:" the iterator function once for each item in obj collection, which can be either an object or an array. The iterator function is invoked with"
   }]
  }
   

  ngOnInit() {
  }
}

