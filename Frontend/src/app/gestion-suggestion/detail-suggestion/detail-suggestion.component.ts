import { ActivatedRoute, Router } from '@angular/router';
import { suggestion } from '../../model/suggestion';
import { Component, OnInit } from '@angular/core';
import { suggestionService } from 'src/app/services/suggestion.service ';

@Component({
  selector: 'app-detail-suggestion',
  templateUrl: './detail-suggestion.component.html',
  styleUrls: ['./detail-suggestion.component.scss'],
})
export class DetailsuggestionComponent implements OnInit {
  suggestion: any;
  idSuggestion:any;
  
    constructor(
    private route: ActivatedRoute,
    private ssuggestion:suggestionService, private router:Router
  ) {}
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('idSuggestion');
      if (idParam !== null) {
        const idSuggestion = +idParam;
        this.ssuggestion.suggestionById(this.idSuggestion).subscribe(suggestion => {
          this.suggestion = suggestion;
        });
      } else {

      }
    });
  }
  editsu(idSuggestion: any) {
    this.router.navigate(['/gestion-suggestion/updatesu', idSuggestion]);
  }

}
