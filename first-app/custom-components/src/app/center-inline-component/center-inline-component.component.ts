import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-center-inline-component',
  template: `<div class="component"></div>`,
  styles:[`.component{
    height: 200px;
    border-radius: 50%;
    text-align: center;
    background-color:black;
}`]
})
export class CenterInlineComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
