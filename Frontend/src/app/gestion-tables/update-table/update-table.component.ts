// update-table.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tables } from '../../model/Tables';
import { TablesService } from 'src/app/services/tables.service';

@Component({
  selector: 'app-update-table',
  templateUrl: './update-table.component.html',
  styleUrls: ['./update-table.component.scss']
})
export class UpdateTableComponent implements OnInit {
  private _table: Tables = new Tables();
  tableId!: number;

  constructor(
    private tablesService: TablesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  // Getter for _table
  get table(): Tables {
    return this._table;
  }

  ngOnInit() {
    const tableIdParam = this.route.snapshot.paramMap.get('tableId') ?? '';

    if (tableIdParam) {
      this.tableId = +tableIdParam;

      this.tablesService.getTableById(this.tableId).subscribe(
        (data: any) => {
          if (data !== null) {
            // Use the setter method to update the table data
            this.setTable(data);
          } else {
            console.error('Error: Table data is null');
          }
        },
        (error) => {
          console.error('Error fetching table details:', error);
          // Handle error as needed
        }
      );
    } else {
      console.error('Error: Table ID is null or undefined');
      // Handle error as needed
    }
  }

  updateTable() {
    this.tablesService.updateTable(this.tableId, this._table).subscribe(
      () => {
        console.log('Table updated successfully');
        alert('Table updated successfully');
        this.router.navigate(['/show-table']); // Navigate to the show table component
      },
      (error) => {
        console.error('Error updating table:', error);
        // Handle error as needed
      }
    );
  }

  // Setter method to update the table data
  private setTable(data: Tables): void {
    this._table = { ...data }; // Using the spread operator to create a new object
  }
}
