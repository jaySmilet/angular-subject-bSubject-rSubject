import { Component, OnInit } from '@angular/core';
import { DuService } from '../../du.service';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {
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