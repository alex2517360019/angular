import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name:string = 'Wolvering';
  public age:number = 850;
  // se invocan sin (), como si fuera propiedad de clase
  get capitalizedName():string{
    return this.name.toLocaleUpperCase();
  }
//  se invocan con ()
  getDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeName():void{
    this.name = 'Magneto';
  }
  changeAge():void{
    this.age = 75;
  }

  resetForm():void{
    this.name = 'Wolvering';
    this.age = 850;
  }
}
