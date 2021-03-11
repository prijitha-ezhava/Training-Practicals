import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyTestServiceService {
private msgSource = new BehaviorSubject("default Message");
currentMsg = this.msgSource.asObservable();

  constructor() { }

  changeMsg(message :any){
    this.msgSource.next(message);
  }
}
