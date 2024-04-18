import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletereclamationComponent } from './delete-reclamation.component';

describe('DeletereclamationComponent', () => {
  let component: DeletereclamationComponent;
  let fixture: ComponentFixture<DeletereclamationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletereclamationComponent]
    });
    fixture = TestBed.createComponent(DeletereclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
