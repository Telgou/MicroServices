import { suggestion } from 'src/app/model/suggestion';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { suggestionService } from 'src/app/services/suggestion.service ';
import { Location } from '@angular/common';

@Component({
  selector: 'app-show-suggestion',
  templateUrl: './show-suggestion.component.html',
  styleUrls: ['./show-suggestion.component.scss'],
})
export class ShowsuggestionComponent implements OnInit {
  suggestions: any[] = [];
  
  searchTerm: string = '';


  constructor(
    private ssuggestion: suggestionService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.ssuggestion.getsuggestion().subscribe((data: any) => {
      console.log(data);
      this.suggestions = data;
    });
  }
  showDetails(idSuggestion: any) {
    this.router.navigate(['/gestion-suggestion/detailsug', idSuggestion]);
  }
  editsu(idSuggestion: any) {
    this.router.navigate(['/gestion-suggestion/updatesug', idSuggestion]);

  }
  deletesu(re: suggestion) {
    this.ssuggestion.removeSuggestion(re).subscribe((data: any) => {
      console.log(data);
      alert('suggestion supprimée avec succès');
      this.router.navigate(['/gestion-suggestion/allsu']);
      window.location.reload();
    });
  }
  addsuggestion() {
    this.router.navigate(['/gestion-suggestion/addsu']); // Naviguer vers la page d'ajout
  }

  get filteredsuggestion() {
    return this.suggestions.filter((suggestion) =>
    suggestion.idSuggestion.toString().includes(this.searchTerm) );
  }


}
