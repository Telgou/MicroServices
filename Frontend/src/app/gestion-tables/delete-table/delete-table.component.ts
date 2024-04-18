import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';  // Make sure to import MatSnackBar


@Component({
  selector: 'app-delete-table',
  templateUrl: './delete-table.component.html',
  styleUrls: ['./delete-table.component.scss']
})
export class DeleteTableComponent {

  constructor(private snackBar: MatSnackBar) {}

  deleteTable() {
    this.snackBar.open('Table deleted', 'Close', {
      duration: 3000,
      verticalPosition: 'top',  // Change this line
    });
      }
}
