import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RomanConversion } from './romanconversion';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RomanService {
  apiUrl = 'http://localhost:5000/api/roman';

  constructor(private http: HttpClient) { }
  
  convert(x: number): Observable<RomanConversion> {
    return this.http.get<RomanConversion>(`${this.apiUrl}/${x}`);
  }
}