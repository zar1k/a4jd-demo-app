import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Talk } from './talk';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TalksService {

  constructor(private http: HttpClient) { }

  getTalks(): Observable<Talk[]> {
    return this.http.get<Talk[]>('http://192.168.1.53:8080/speaker/talks');
  }
}
