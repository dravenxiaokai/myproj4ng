import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildFiveComponent } from '../test-content-child/child-five/child-five.component';

@Component({
  selector: 'test-view-child',
  templateUrl: './test-view-child.component.html',
  styleUrls: ['./test-view-child.component.scss']
})
export class TestViewChildComponent implements OnInit {

  @ViewChild(ChildFiveComponent) childFive: ChildFiveComponent;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log(this.childFive)
    this.childFive.age = 20;
    this.childFive.myevent.subscribe((data)=>{
      console.log(data);
    });

  }

}