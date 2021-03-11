import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World From Component!';
  currentCustomer = "Text interpolation Demo";
  parentValue = "Value from Parent to Child!";
}
