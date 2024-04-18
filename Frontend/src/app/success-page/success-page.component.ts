import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success-page',
  templateUrl: './success-page.component.html',
  styleUrls: ['./success-page.component.scss'],
})
export class SuccessPageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  navigateToReclamation() {
    // Navigate to the reclamation page or component
    this.router.navigate(['/reclamation']);
  }
}
