import { Component, OnInit } from '@angular/core';
import { Tables } from 'src/app/model/Tables';
import { TablesService } from 'src/app/services/tables.service';
import { MatSnackBar } from '@angular/material/snack-bar';  // Make sure to import MatSnackBar


@Component({
  selector: 'app-add-table',
  templateUrl: './add-table.component.html',
  styleUrls: ['./add-table.component.scss']
})
export class AddTableComponent implements OnInit {

  table: Tables = new Tables();

  constructor(private tablesService: TablesService,  private snackBar: MatSnackBar) {}
  
  ngOnInit() {
    // Additional initialization logic if needed
  }

  addTable() {
    console.log('Selected Cuisine:', this.table.cuisine);
    if (!this.table.numTable || !this.table.cuisine || !this.table.etatT || !this.table.reservation) {
      alert('Please fill in all required fields.');
      return;
    }

    // Call the API to add the table
    this.tablesService.addTable(this.table).subscribe(
      () => {
        console.log('Table added successfully');
        alert('Table added successfully');
        this.snackBar.open('Table added', '', {
          duration: 6000,
          verticalPosition: 'top',  // Change this line
          panelClass: ['custom-snackbar'], // Add this line

        });
    
        // Additional actions if needed
      },
      (error) => {
        console.error('Error adding table:', error);
        // Handle error as needed
      }
    );
  }
}
