import { Component,  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
   sidebarActive: boolean = false;
  dropdownActive: boolean = false;
  environmentalDropdownActive = false;
  analyticalDropdownActive = false;

  ope(): void {
    const mySidenav: HTMLElement | null = document.getElementById("mySidenav");
    if (mySidenav) {
      mySidenav.style.width = "250px";
    }
    console.log("sdfs");
  }

  toggleSidebar() {
    this.sidebarActive = !this.sidebarActive;
  }

  toggleDropdown() {
    this.dropdownActive = !this.dropdownActive;
  }

  toggleEnvironmentalDropdown() {
    this.environmentalDropdownActive = !this.environmentalDropdownActive;
    // Optionally close the analytical dropdown when environmental is opened
    if (this.environmentalDropdownActive) {
      this.analyticalDropdownActive = false;
    }
  }

  toggleAnalyticalDropdown() {
    this.analyticalDropdownActive = !this.analyticalDropdownActive;
    // Optionally close the environmental dropdown when analytical is opened
    if (this.analyticalDropdownActive) {
      this.environmentalDropdownActive = false;
    }
  }

  set() {
    let data = { id: 1, name: 'reddy' };
    localStorage.setItem("name", JSON.stringify(data));
    console.log("true");
    this.sidebarActive = false; // Close sidebar when a link is clicked
  }
  
}
