import { Component, OnDestroy, OnInit } from '@angular/core';
import { DuService } from '../du.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit, OnDestroy {
  username: string = 'Jay';
  constructor(private duService: DuService) {}

  ngOnInit() {
    this.duService.mySubject.next(true);
    this.duService.username.subscribe((res) => {
      this.username = res;
    });
  }

  ngOnDestroy() {
    this.duService.mySubject.next(false);
  }
}
