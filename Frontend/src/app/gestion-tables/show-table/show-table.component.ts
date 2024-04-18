import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { TablesService } from 'src/app/services/tables.service';  // Update the path accordingly
import { MessageService } from 'src/app/services/message.service';  // Update the path accordingly
import { Tables } from '../../model/Tables';  // Update the path accordingly

@Component({
  selector: 'app-show-table',
  templateUrl: './show-table.component.html',
  styleUrls: ['./show-table.component.scss']
})
export class ShowTableComponent implements OnInit {
  @Input() newTable: Tables | null = null;
  @Output() tableDeleted = new EventEmitter<Tables>();

  tables: Tables[] = [];
  searchTerm: string = '';

  constructor(
    private tablesService: TablesService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    // Retrieve all existing tables
    this.tablesService.getAllTables().subscribe((data: Tables[]) => {
      console.log('Existing tables:', data);
      this.tables = data;
    });
  
    // Subscribe to the success message
    this.messageService.successMessage$.subscribe((message) => {
      if (message) {
        console.log('Success message:', message);
  
        // If the success message indicates a new table was added
        if (message.includes('Table added successfully')) {
          // Retrieve the updated list of tables (including the new one)
          this.tablesService.getAllTables().subscribe((updatedData: Tables[]) => {
            console.log('Updated tables after addition:', updatedData);
            this.tables = updatedData;
          });
        }
      }
    });
  }

  addTable() {
    this.router.navigate(['/add-table']);  // Update the path accordingly
  }

  showDetails(idTable: any) {
    this.router.navigate(['/path-to-table-details', idTable]);  // Update the path accordingly
  }

  deleteTable(table: Tables) {
    this.tablesService.deleteTable(table.idTable).subscribe(() => {
      this.messageService.sendSuccessMessage('Table deleted successfully');
      this.tableDeleted.emit(table);
    });
  }
  
  
  editTable(tableId: number) {
    console.log('Editing table with ID:', tableId);
    this.router.navigate(['gestion-tables/UpdateTable/', tableId]);  // Update the path accordingly
  }

  get filteredTables() {
    return this.tables.filter(
      (table) =>
        table.idTable.toString().includes(this.searchTerm) ||
        table.numTable.toString().includes(this.searchTerm) ||
        table.etatT.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
