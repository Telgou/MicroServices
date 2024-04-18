import { ActivatedRoute, Router } from '@angular/router';
import { evaluation } from '../../model/evaluation';
import { Component, OnInit } from '@angular/core';
import { evaluationService } from 'src/app/services/evaluation.service';

@Component({
  selector: 'app-detail-evaluation',
  templateUrl: './detail-evaluation.component.html',
  styleUrls: ['./detail-evaluation.component.scss'],
})
export class DetailevaluationComponent implements OnInit {
  evaluation: any;
  idEvaluation:any;
  
    constructor(
    private route: ActivatedRoute,
    private sevaluation:evaluationService, private router:Router
  ) {}
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('idEvaluation');
      if (idParam !== null) {
        const evaluationId = +idParam;
        this.sevaluation.evaluationById(this.idEvaluation).subscribe(evaluation => {
          this.evaluation = evaluation;
        });
      } else {

      }
    });
  }
  updateEvaluation(idEvaluation: any) {
    this.router.navigate(['/gestion-evaluation/updateev', idEvaluation]);
  }

}
