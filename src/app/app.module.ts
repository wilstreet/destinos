import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DestinoComponent } from './destino/destino.component';
import { ListDestinoComponent } from './list-destino/list-destino.component';

@NgModule({
  declarations: [
    AppComponent,
    DestinoComponent,
    ListDestinoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
