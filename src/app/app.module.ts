import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { CounterComponent } from './counter/counter.component';
// import { HeroComponent } from './heroes/hero/hero.component';
// import { ListComponent } from './heroes/list/list.component';
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';
// declarar modulos a ocupar - componentes se referencia clase ts que tiene el selector y el componente+
@NgModule({
  declarations: [
    AppComponent,
    // CounterComponent,
    // HeroComponent,
    // ListComponent
  ],
  imports: [ //se importan los modulos
    BrowserModule,
    CounterModule,
    HeroesModule // HeroComponent y ListComponent juntos
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
