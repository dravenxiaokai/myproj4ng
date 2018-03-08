import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss']
})
export class ChildOneComponent implements OnInit {

  public title:string = "默认标题";

  public myEvent:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  public sayHello():void{
    this.myEvent.emit('子组件触发的事件...');
  }
}
