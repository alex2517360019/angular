import { Component } from '@angular/core';
// se invida id de elemento a reederizar el main con el componente que se desea html + css = componente
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public title:string = 'primera app';
}
