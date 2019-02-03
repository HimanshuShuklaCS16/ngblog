import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar'; 
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  constructor() {}

  ngOnInit() {
  }

}
