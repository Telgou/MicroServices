import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { reclamationService } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-add-reclamation',
  templateUrl: './add-reclamation.component.html',
  styleUrls: ['./add-reclamation.component.scss']
})
export class AddreclamationComponent  {
  addrec: FormGroup;


  constructor(private fb: FormBuilder, private router:Router,private sreclamation: reclamationService) {
    this.addrec = this.fb.group({
      dateReclamation: ['', Validators.required],
      statutReclamation: ['', Validators.required],
      descreptionReclamation: ['', Validators.required],
      idEmployee: ['', Validators.required]

    });

  }


onSubmit() {
  if (this.addrec.valid) {
    const reclamation = this.addrec.value;
    console.log(reclamation); // Vérifiez la valeur de estValid ici
    this.sreclamation.addReclamation(reclamation).subscribe((data) => {
      console.log(data);
      alert('reclamation ajoutée avec succès');
      this.router.navigate(['gestion-reclamation/allrec'])
    });
  }
}

}
