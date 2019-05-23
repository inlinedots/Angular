import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { EventsComponent } from "./events/events.component";
import { EventDetailComponent } from "./event-detail/event-detail.component";
import { OccurencesComponent } from "../app/occurences/occurences.component";

const routes: Routes = [
  { path: "", redirectTo: "/events", pathMatch: "full" },
  { path: "events", component: EventsComponent },
  { path: "occurences", component: OccurencesComponent },
  { path: "eventdetail/:id", component: EventDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
