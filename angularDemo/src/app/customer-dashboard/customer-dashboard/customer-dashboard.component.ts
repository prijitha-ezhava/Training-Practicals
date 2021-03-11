import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {

  @Input() childMsg:any;

  @Output() parentMsg = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    console.log('myValue', this.childMsg);
  }

}
