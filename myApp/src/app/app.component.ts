import { Component } from '@angular/core';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myApp';

  myName = "hari";
  failedStudent: any;
  studentDetails: Array<any> = []
  constructor() {
    this.callMe();
    console.log(this.myName);

    //  console.log(lastname)
  }
  callMe() {

    //  diff btw let and var
    this.myName = "pradeep";
    var lastname = "kalahasti";
    if (true) {
      let middleName = "kumar";
      console.log(middleName);
      lastname = "kalahasthi"
    }
    // --------------------------------------------------------------
    // console.log(middleName);
    console.log(lastname);

    // objects

    let obj: any = {};
    obj.name = "ram";
    obj.school = "nnt"
    console.log(obj);
    let obj1: any = {
      name: "suresh",
      school: "stanns"
    }
    console.log(obj1);

    // --------------------------------------------------------------
    // arrays

    // var mySubjects = ["maths", "science", "social", "telugu"]
    // console.log(mySubjects)

    let mySubjects: Array<any> = ["maths", "science", "social", "telugu"];
    console.log(mySubjects);

    this.studentDetails = [
      {
        id: 67,
        name: "hari",
        class: "5th",
        annualGrade: "A"
      },
      {
        id: 45,
        name: "john",
        class: "10th",
        annualGrade: "F"
      },
      {
        id: 12,
        name: "joesph",
        class: "1st",
        annualGrade: "A+"
      },
      {
        id: 67,
        name: "babu",
        class: "8th",
        annualGrade: "B"
      },
      {
        id: 87,
        name: "hari",
        class: "5th",
        annualGrade: "A"
      }
    ]
    console.log(this.studentDetails);
    // for(let i = 0; i<this.studentDetails.length; i++){
    //     if(this.studentDetails[i].annualGrade == "F"){
    //         this.failedStudent = this.studentDetails[i].name;
    //     }
    // }

    this.studentDetails.forEach((detail) => {
      if (detail.annualGrade == "F") {
        this.failedStudent = detail.name;
      }
    })

    // function sum(text){
    //   console.log('this is a' + " " + text);
    // }

    //sum("legacy");


    var sum = (text) => {
      console.log('this is a' + " " + text);
    }

    sum("new");
  }

}
