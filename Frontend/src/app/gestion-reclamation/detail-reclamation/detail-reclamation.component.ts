import { ActivatedRoute, Router } from '@angular/router';
import { reclamations } from '../../model/reclamation';
import { Component, OnInit } from '@angular/core';
import { reclamationService } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-detail-reclamation',
  templateUrl: './detail-reclamation.component.html',
  styleUrls: ['./detail-reclamation.component.scss'],
})
export class DetailreclamationComponent implements OnInit {
  reclamation: any;
  idReclamation:any;
  
    constructor(
    private route: ActivatedRoute,
    private sreclamation:reclamationService, private router:Router
  ) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      const idReclamation = params['idReclamation'];
      // Use the reclamationId as needed
    });
  
    
  }
  updatereclamation(idReclamation: any) {
    this.router.navigate(['/gestion-reclamation/updaterec', idReclamation]);
  }

}
