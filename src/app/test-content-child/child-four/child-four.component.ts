import { Component, OnInit, ContentChild, ContentChildren, QueryList } from '@angular/core';
import { ChildFiveComponent } from '../child-five/child-five.component';

@Component({
  selector: 'child-four',
  templateUrl: './child-four.component.html',
  styleUrls: ['./child-four.component.scss']
})
export class ChildFourComponent implements OnInit {
  // @ContentChild(ChildFiveComponent)
  // childFive: ChildFiveComponent;
  @ContentChildren(ChildFiveComponent)
  childFiveList:QueryList<ChildFiveComponent>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    // console.log(this.childFive);
    // this.childFive.age = 20;
    // this.childFive.myevent.subscribe((data)=>{
    //   console.log(data);
    // })
    this.childFiveList.forEach((item)=>{
      console.log(item);
    })
  }

}
