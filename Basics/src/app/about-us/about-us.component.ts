import { Component, OnInit } from '@angular/core';
import { MyTestServiceService } from '../my-test-service.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
    message :any;
  constructor(private myService : MyTestServiceService) {
    
   }

  ngOnInit(): void {
  }
  clickMe(){
    this.message.changeMsg('My new Message');
  }

}
