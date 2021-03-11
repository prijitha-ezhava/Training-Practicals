import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-parent-to-child',
  templateUrl: './parent-to-child.component.html',
  styleUrls: ['./parent-to-child.component.css']
})
export class ParentToChildComponent implements OnInit {
// Parent to Child
  @Input() childMsg : any;

  //Child to Parent
  @Output() outputMsg = new EventEmitter<any>();
  message = "Data From Child to Parent"

  constructor() { }
  ngOnInit(): void {
  }

  //click Event
  clickEvent(){
    this.outputMsg.emit(this.message);
  }

}
