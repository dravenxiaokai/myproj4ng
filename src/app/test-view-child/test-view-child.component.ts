import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { ChildFiveComponent } from '../test-content-child/child-five/child-five.component';

@Component({
  selector: 'test-view-child',
  templateUrl: './test-view-child.component.html',
  styleUrls: ['./test-view-child.component.scss']
})
export class TestViewChildComponent implements OnInit {

  // @ViewChild(ChildFiveComponent) childFive: ChildFiveComponent;
  @ViewChildren(ChildFiveComponent) 
  childFiveList:QueryList<ChildFiveComponent>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // console.log(this.childFive)
    // this.childFive.age = 20;
    // this.childFive.myevent.subscribe((data)=>{
    //   console.log(data);
    // });

    this.childFiveList.forEach((item)=>{
      console.log(item);
    })

  }

}
