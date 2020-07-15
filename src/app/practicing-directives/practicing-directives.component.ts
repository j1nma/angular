import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practicing-directives',
  templateUrl: './practicing-directives.component.html',
  styleUrls: ['./practicing-directives.component.css']
})
export class PracticingDirectivesComponent implements OnInit {

  isDisplayed = false;
  log = [];

  constructor() { }

  ngOnInit(): void {
  }

  onToggleDetails() {
    this.isDisplayed = !this.isDisplayed;
    this.log.push(new Date);
  }

}
