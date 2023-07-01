import { NgModule } from '@angular/core';
import { CounterComponent } from './components/counter/counter.component';

@NgModule({
  // declarar componentes a usar como tipo index.js
  declarations: [
    CounterComponent
  ],
  exports: [ // para ocuparlo en otros componentes
    CounterComponent
  ]
})
export class CounterModule{

}
