import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DuService {
  mySubject = new Subject<boolean>();

  // username = new Subject<string>()
  username = new BehaviorSubject<string>('Anjam');

  contentEmit = new ReplaySubject<string>(3);

  constructor() {}
}
