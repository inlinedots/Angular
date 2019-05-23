import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { EventsComponent } from "./events/events.component";
import { EventDetailComponent } from "./event-detail/event-detail.component";
import { AppRoutingModule } from "./app-routing.module";
import { MatCardModule } from "@angular/material/card";
import { AgmCoreModule } from "@agm/core";
import { OccurencesComponent } from './occurences/occurences.component';

@NgModule({
  declarations: [AppComponent, EventsComponent, EventDetailComponent, OccurencesComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSxxxxxxxxxXXXXXxxxxxxxxxxxx"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
