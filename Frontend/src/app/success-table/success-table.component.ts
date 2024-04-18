import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success-page',
  templateUrl: './success-table.component.html',
  styleUrls: ['./success-table.component.scss'],
})
export class SuccessTableComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  navigateToHomePage() {
    // Navigate to the home page or component
    this.router.navigate(['/home-page']);
  }
}