import { Injectable } from "@angular/core";
import { Event } from "./event";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class EventService {
  private eventsUrl = "https://api.detskeriaarhus.dk/api/events";
  // private eventsUrl = "https://api.detskeriaarhus.dk/api/daily_occurrences";
  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.eventsUrl);
  }

  getEvent(id: number): Observable<Event> {
    const url = `${this.eventsUrl}/${id}`;
    return this.http.get<Event>(url);
  }

  constructor(private http: HttpClient) {}
}
