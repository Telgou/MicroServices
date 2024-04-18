import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { suggestionService } from 'src/app/services/suggestion.service ';

@Component({
  selector: 'app-add-suggestion',
  templateUrl: './add-suggestion.component.html',
  styleUrls: ['./add-suggestion.component.scss']
})
export class AddsuggestionComponent {
  addsug: FormGroup;


  constructor(private fb: FormBuilder, private router :Router,private ssuggestion: suggestionService) {
    this.addsug = this.fb.group({
      idSuggestion: ['', ],
      dateSuggestion: ['', Validators.required],
      descriptionSuggestion: ['', Validators.required],// Utilisez estValide au lieu de estValid
      statusSuggestion: ['', Validators.required],
      responsable: ['', Validators.required]
    });

  }


onSubmit() {
  if (this.addsug.valid) {
    const suggestion = this.addsug.value;
    console.log(suggestion); // Vérifiez la valeur de estValid ici
    this.ssuggestion.addSuggestion(suggestion).subscribe((data) => {
      console.log(data);
      alert('suggestion ajoutée avec succès');
      this.router.navigate(['gestion-suggestion/allsug'])
    });
  }
}

}
