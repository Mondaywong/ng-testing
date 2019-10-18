import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  firstName = '';
  status = true;
  clicked = [];
  toggleStatus() {
    this.status = !this.status;
     this.clicked.push(this.clicked.length + 1);
  }
  getColor() {
    if (this.clicked.length >= 5) {
      return 'green';
    }
  }
}
