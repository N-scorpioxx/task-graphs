import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {XyGraphComponent} from "./xy-graph/xy-graph.component";
import {HeatMapGraphComponent} from "./heat-map-graph/heat-map-graph.component";

const routes: Routes = [
  {
    path: "graphs",
    component: XyGraphComponent,
    data: {
      title: "XY Graph",
    },
  },
  {
    path: "heatmaps",
    component: HeatMapGraphComponent,
    data: {
      title: "Heat Map Graph",
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
