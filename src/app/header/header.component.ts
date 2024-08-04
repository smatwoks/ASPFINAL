import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sidebarActive: boolean = false;

  toggleSidebar() {
    this.sidebarActive = !this.sidebarActive;
  }


  set() {
    // Additional logic for setting state if needed
  }


  constructor(private router: Router) { }
  
  ngOnInit(): void {
  }
}
