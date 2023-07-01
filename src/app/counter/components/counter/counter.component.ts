import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: 'counter.component.html',
  styleUrls: ['counter.component.css']
})
export class CounterComponent{
  public counter: number = 0;
  private initialCounter: number = this.counter;

  increaseBy( value:number = 1 ):void{
    this.counter += value;
  }

  decreaseBy( value:number = 1 ):void{
    if(this.counter <= 0) return;
    this.counter -= value;
  }

  resetValue():void{
    this.counter = this.initialCounter;
  }
}
