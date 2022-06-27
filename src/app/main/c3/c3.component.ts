import { Component, OnInit } from '@angular/core';
import { DuService } from '../../du.service';

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css'],
})
export class C3Component implements OnInit {
  username: string;
  constructor(private duSerivce: DuService) {}

  ngOnInit() {
    this.duSerivce.username.subscribe((res) => {
      this.username = res;
    });
  }

  onChange() {
    this.duSerivce.username.next(this.username);
  }
}
