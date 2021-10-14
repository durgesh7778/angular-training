import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'string-interpolation-example';
  FirstName: string = 'Durgesh';
  LastName: string = 'Sharma';
  FullName = this.getFullName();
  getFullName() {
    return this.FirstName + ' ' + this.LastName;
  }

  FirstValue: number = 10;
  SecondValue: number = 20;
  GetCalculatedValue(){
    return this.FirstValue + this.SecondValue;
  }

}
