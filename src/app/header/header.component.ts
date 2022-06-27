import { Component, OnDestroy, OnInit } from '@angular/core';
import { DuService } from '../du.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  exclusive:boolean = false;
  constructor( private duService:DuService) { }

  ngOnInit() {
    this.duService.mySubject.subscribe(res=>{
      this.exclusive = res;
    })
  }

}