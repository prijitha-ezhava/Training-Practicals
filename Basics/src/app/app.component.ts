import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Basics';
  name = 'Expressions';
  sorts = {one :'Quick Sort', two: 'Bubble Sort', three: 'Insertion Sort'};
}
