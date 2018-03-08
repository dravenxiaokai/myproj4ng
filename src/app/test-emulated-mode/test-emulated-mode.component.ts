import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'test-emulated-mode',
  encapsulation:ViewEncapsulation.Emulated,
  templateUrl: './test-emulated-mode.component.html',
  styleUrls: ['./test-emulated-mode.component.scss']
})
export class TestEmulatedModeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
