import { Component, OnInit } from "@angular/core";
import { DailyOccurrence } from "../daily-occrences";
import { DailyOccurencesService } from "../daily-occurences.service";
import { Location } from "@angular/common";

@Component({
  selector: "app-occurences",
  templateUrl: "./occurences.component.html",
  styleUrls: ["./occurences.component.css"]
})
export class OccurencesComponent implements OnInit {
  occurrences: DailyOccurrence[];
  constructor(
    private occurrenceService: DailyOccurencesService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getOccurences();
  }

  getOccurences(): void {
    this.occurrenceService
      .getOccurences()
      .subscribe(
        occurrences => (this.occurrences = occurrences["hydra:member"])
      );
  }
  goBack(): void {
    this.location.back();
  }
  occurrenceClick(occurrence) {
    console.log(occurrence.event.url);
    let url = "" + occurrence.event.url;
    window.open(url);
  }
  buyClick(occurrence) {
    let url = "" + occurrence.event.ticketPurchaseUrl;
    window.open(url);
  }
}
