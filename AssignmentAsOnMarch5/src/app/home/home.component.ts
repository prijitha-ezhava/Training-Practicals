import { Component, Input, OnInit } from '@angular/core';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
serviceMsg = "";
ChildViewMsg = "Prijitha Ezhava";

  constructor(private myService : TestServiceService) { 
    
  }

  ngOnInit(): void {
    this.myService.currentData.subscribe(data=>{console.log('data',data);
    this.serviceMsg = data;
  })
  }

}
