import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { XyGraphComponent } from './xy-graph/xy-graph.component';
import { HeatMapGraphComponent } from './heat-map-graph/heat-map-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    XyGraphComponent,
    HeatMapGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
