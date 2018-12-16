import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-js',
  templateUrl: './js.component.html',
  styleUrls: ['./js.component.scss']
})
export class JsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('hi');

    var a = 10;

    var b = function () {
      console.log(a);
    }

    b();


    var name1 = "john";
    var name2 = name1;
    var hgfhg;

    console.log(hgfhg);
    var one = function () {
      console.log(name2)
    }
    function two() {
      console.log(name1);
      one();
    }
    function three() {
      var name1 = "suresh";
      console.log(name1);
      two();
    }
    three();


    var obj1 = {
      name: "hari",
      getDetails: function () {
        console.log('my name is' + '' + obj1.name);
      }
    }
    console.log(obj1.name);
    console.log(obj1.getDetails());

    var studenDetails = function (fname, lname) {
      // var firstName = fname;
      // var lastName = lname;
      this.firstName = fname;
      this.lastName = lname;
      console.log(this.firstName + " " + this.lastName);
    }

    // studenDetails('hari', 'kalahasti');

    var hari = new studenDetails('hari', 'kalahasti');
    var john = new studenDetails('john', 'alexan');

    // hari.fulldetails = "asdkhaskdjh"
    // console.log(hari)
    studenDetails.prototype.address = function (address) {
      this.address = address;
      console.log(this.firstName + " " + this.lastName + " live in  " + this.address);
    }

    hari.address('rajahmundry');
    console.log(hari);


    var obj3 = {
      name: "joseph",
      school: "stanns"
    }

    var steve = Object.create(obj3);
    steve.name = "steve"
    steve.school = "stjoseph"
    steve.class = "10th"

    console.log(steve);
  }



}
