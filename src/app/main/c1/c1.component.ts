import { Component, OnInit } from '@angular/core';
import { DuService } from '../../du.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css'],
})
export class C1Component implements OnInit {
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
