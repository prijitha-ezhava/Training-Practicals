import { HomeComponent } from './home/home.component';
import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { HomeComponentComponent } from './home-component/home-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  
  @ViewChild(HomeComponentComponent) homeRef : HomeComponentComponent|any;

  constructor() {
    
  }
  

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void { 
    this.homeRef.name = "Override values using view child!!";
  }
  title = 'AssignmentAsOnMarch5';
  parentMsg = "Message From Parent to Child.....";
  childMsg : any;
  IsUnchanged = true;
  pTagAttribute = "Id = 3";
  name = ["Prijitha","Drashti"]
  
  //Pipes
  birthdate = new Date(1998,5,2);

  //Child to parent Button click Event
  outputEvent(event:any){
    this.childMsg = event;  
  }
}


