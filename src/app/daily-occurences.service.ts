import { Injectable } from "@angular/core";
import { DailyOccurrence } from "./daily-occrences";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DailyOccurencesService {
  private occurrenceUrl = "https://api.detskeriaarhus.dk/api/daily_occurrences";

  getOccurences(): Observable<DailyOccurrence[]> {
    return this.http.get<DailyOccurrence[]>(this.occurrenceUrl);
  }

  getOccurence(id: number): Observable<DailyOccurrence> {
    const url = `${this.occurrenceUrl}/${id}`;
    return this.http.get<DailyOccurrence>(url);
  }

  constructor(private http: HttpClient) {}
}
