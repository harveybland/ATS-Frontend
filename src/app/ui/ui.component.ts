import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {

  @ViewChild('rootBody', { static: true }) viewBody: ElementRef;

  constructor() { }

  ngOnInit() {
  }

}
