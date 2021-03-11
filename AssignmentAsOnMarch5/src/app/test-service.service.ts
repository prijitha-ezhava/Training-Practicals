import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {
  
  // Behaviour Subject acts as Observer here.
private dataSource = new BehaviorSubject('default Msg');
currentData = this.dataSource.asObservable();
  constructor() { }

  //This method will be called when the button in 'about-us' is clicked
  onDataChange(message : any){
    this.dataSource.next(message);
  }
}
