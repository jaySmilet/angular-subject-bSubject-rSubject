import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { DuService } from '../du.service';

@Component({
  selector: 'app-rs',
  templateUrl: './rs.component.html',
  styleUrls: ['./rs.component.css'],
})
export class RsComponent implements OnInit {
  // UserDataList
  userList1 = ['Angular', 'HTML', 'CSS'];
  userList2 = [];
  userList3 = [];

  // Subscription Mode
  subscribeMode2: boolean = false;
  subscribeMode3: boolean = false;

  // Subscription
  subscription2: Subscription;
  subscription3: Subscription;

  // Toggle Properties
  showToggle: boolean = false;
  toggleIntSub: Subscription;

  constructor(private duService: DuService) {}

  ngOnInit() {
    this.duService.contentEmit.subscribe((res) => {
      console.log(res);
      this.userList1.push(res);
    });
  }

  onSubscribeMode2Change() {
    if (this.subscribeMode2) {
      this.subscription2.unsubscribe();
    } else {
      this.subscription2 = this.duService.contentEmit.subscribe((res) => {
        this.userList2.push(res);
      });
    }
    this.subscribeMode2 = !this.subscribeMode2;
  }

  onSubscribeMode3Change() {
    if (this.subscribeMode3) {
      this.subscription3.unsubscribe();
    } else {
      this.subscription3 = this.duService.contentEmit.subscribe((res) => {
        this.userList3.push(res);
      });
    }
    this.subscribeMode3 = !this.subscribeMode3;
  }

  addData(video) {
    // console.log(video);
    this.duService.contentEmit.next(video);
  }

  toogleMethod() {
    const toggleInterval = interval(1500);

    if (!this.showToggle) {
      this.toggleIntSub = toggleInterval.subscribe((res) => {
        this.duService.contentEmit.next('' + res);
      });
    } else {
      this.toggleIntSub.unsubscribe();
    }
    this.showToggle = !this.showToggle;
  }
}
