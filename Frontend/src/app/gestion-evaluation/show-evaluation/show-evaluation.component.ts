import { evaluation } from 'src/app/model/evaluation';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { evaluationService } from 'src/app/services/evaluation.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-show-evaluation',
  templateUrl: './show-evaluation.component.html',
  styleUrls: ['./show-evaluation.component.scss'],
})
export class ShowevaluationComponent implements OnInit {
  evaluations: any[] = [];
  
  searchTerm: string = '';


  constructor(
    private sevaluation: evaluationService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.sevaluation.getevaluation().subscribe((data: any) => {
      console.log(data);
      this.evaluations = data;
    });
  }
  showDetails(idEvaluation: any) {
    this.router.navigate(['/gestion-evaluation/detailev', idEvaluation]);
  }
  editev(idEvaluation: any) {
    this.router.navigate(['/gestion-evaluation/updateev', idEvaluation]);

  }
  deleteev(ev: evaluation) {
    this.sevaluation.removeEvaluation(ev).subscribe((data) => {
      console.log(data);
      alert('evaluation supprimée avec succès');
      this.router.navigate(['/gestion-evaluation/allev']);
      window.location.reload();
    });
  }
  addevaluation() {
    this.router.navigate(['/gestion-evaluation/addev']); // Naviguer vers la page d'ajout
  }

  get filteredevaluation() {
    return this.evaluations.filter((evaluation) =>
    evaluation.idEvaluation.toString().includes(this.searchTerm) );
  }


}
