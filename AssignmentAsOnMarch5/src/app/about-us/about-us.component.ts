import { TestServiceService } from './../test-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
    msg : any;
  constructor(private service : TestServiceService) { }

  ngOnInit(): void {
  }

  //Button clicked event where new message is being transferred back!!
  clickhere(){
    this.msg = this.service.onDataChange("New Message!!");
  }
}
