import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { ChildOneComponent } from './child-one/child-one.component';

@Component({
  selector: 'test-dynamic-component',
  templateUrl: './test-dynamic-component.component.html',
  styleUrls: ['./test-dynamic-component.component.scss']
})
export class TestDynamicComponentComponent implements OnInit {
  @ViewChild('dyncontainer', { read: ViewContainerRef })
  dyncontainer: ViewContainerRef

  comp1: ComponentRef<ChildOneComponent>;

  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log('动态的创建组件的实例...');
    //定义变量拿到解析的子组件
    const childComp = this.resolver.resolveComponentFactory(ChildOneComponent);
    //在标识的容器内创建解析好的子组件，拿到这个DOM节点
    this.comp1 = this.dyncontainer.createComponent(childComp);
    //通过DOM节点的实例，可以设置属性
    this.comp1.instance.title = '父组件动态赋值的标题';
    //订阅子组件发送过来的事件
    this.comp1.instance.myEvent.subscribe((data) => {
      console.log(data);
    });

    // let comp2 = this.dyncontainer.createComponent(childComp);
    // comp2.instance.title = '我是第2个动态组件';
    // let comp3 = this.dyncontainer.createComponent(childComp);
    // comp3.instance.title = '我是第3个动态组件';
    // let comp4 = this.dyncontainer.createComponent(childComp, 0);
    // comp4.instance.title = '我是第4个动态组件';
  }

  public delComp():void{
    this.comp1.destroy();
  }

}
