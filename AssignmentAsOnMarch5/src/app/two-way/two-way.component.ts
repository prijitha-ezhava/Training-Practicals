import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent implements OnInit {
public subText:string = "Not Submitted anything yet!!!";
public x: number|any;
public y:number|any;


submit($event : Event){
  this.subText = "Submitted successfully!";
  console.log($event);
}

mouseMove($event :MouseEvent){
  this.x = $event.x;
  this.y = $event.y;
}
  constructor() { }

  ngOnInit(): void {
  }

  

 

}
