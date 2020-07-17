import { Component } from '@angular/core';
// import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // styles: [`
  // h3 {
  //   color: dodgerblue;
  // }
  // `]
})

export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  onlyOdd: boolean = false;
  value = 100;


  onIntervalFired(firedNumber: number) {
    if (firedNumber % 2 === 0) {
      this.evenNumbers.push(firedNumber);
      this.onlyOdd = true;
    } else {
      this.oddNumbers.push(firedNumber);
      this.onlyOdd = false;
    }
  }
}
