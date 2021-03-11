import { MyTestServiceService } from './../my-test-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private myService : MyTestServiceService) { }

  ngOnInit(): void {
    this.myService.currentMsg.subscribe(data=>{
      console.log('data',data);
    })
  }

}
