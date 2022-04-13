import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreakingBadService {
  url = 'https://www.breakingbadapi.com/api/'
  constructor(private _http: HttpClient) { }

  getCharacters(): Observable<any> {
    const characters = 'characters'
    return this._http.get(`${this.url}${characters}`)
  }

  getEpisodes(): Observable<any> {
    const episodes = 'episodes'
    return this._http.get(`${this.url}${episodes}`)
  }
  getQuotes(): Observable<any> {
    const quotes = 'quotes'
    return this._http.get(`${this.url}${quotes}`)
  }
}
