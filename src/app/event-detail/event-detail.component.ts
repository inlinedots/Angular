import { Component, OnInit, Input } from "@angular/core";
import { Event } from "../event";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { EventService } from "../event.service";

@Component({
  selector: "app-event-detail",
  templateUrl: "./event-detail.component.html",
  styleUrls: ["./event-detail.component.css"]
})
export class EventDetailComponent implements OnInit {
  // The event property must be an Input property, annotated with the
  // @Input() decorator,
  // because the external EventComponent will bind to it like this.
  // <app-event-detail [event]="selectedEvent"></app-event-detail>
  url: string;
  @Input() event: Event;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getEvent();
  }
  getEvent(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.eventService.getEvent(id).subscribe(event => (this.event = event));
  }
  goBack(): void {
    this.location.back();
  }

  mapClick(event) {
    let url =
      "https://www.google.com/maps/search/?api=1&query=" +
      String(event.occurrences[0].place.latitude) +
      "," +
      String(event.occurrences[0].place.longitude);
    window.open(url);
  }

  buyClick(event) {
    let url = "" + event.ticketPurchaseUrl;
    window.open(url);
  }
}
