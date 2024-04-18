import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { suggestion } from 'src/app/model/suggestion';
import { suggestionService } from 'src/app/services/suggestion.service ';

@Component({
  selector: 'app-update-suggestion',
  templateUrl: './update-suggestion.component.html',
  styleUrls: ['./update-suggestion.component.scss']
})
export class UpdatesuggestionComponent implements OnInit {
  Formupdate!: FormGroup;
  idSuggestion!: any;

  constructor(
    private fb: FormBuilder,
    private sSuggestion: suggestionService,
    private ac: ActivatedRoute,
    private router: Router
  ) {
    this.idSuggestion = this.ac.snapshot.params['idSuggestion'];

    this.Formupdate = this.fb.group({
      idSuggestion: [this.idSuggestion],
      dateSuggestion: [new Date()],
      descriptionSuggestion: [''],
      statusSuggestion: [''],
      Responsable: ['']
    });
  }

  ngOnInit(): void {
    this.sSuggestion.suggestionById(this.idSuggestion).subscribe(data => {
      this.Formupdate.patchValue(data || new suggestion());
    });
  }

  updateSuggestion() {
    
    const updateData = this.Formupdate.value;console.log(updateData)
    const updateSubscription = this.sSuggestion.updateSuggestion(updateData, this.idSuggestion).subscribe({
      next: (data: any) => {
        console.log('Suggestion updated successfully:', data);
        alert('Suggestion updated successfully');
        this.router.navigate(['gestion-suggestion/allsug']);
      },
      error: (error: any) => {
        console.error('Error updating suggestion:', error);
        alert(`Error updating suggestion: ${error.message}`);
      },
      complete: () => {
        updateSubscription.unsubscribe();
      }
    });
  }
}
