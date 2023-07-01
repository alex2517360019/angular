import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
   public heroList:string[] = ['Batman','Ironman','Hulk','Black Panter','Spiderman','Superman'];
   public deletedHero?: string;
   removeLastHero():void{
    this.deletedHero = this.heroList.pop();
   }
}
