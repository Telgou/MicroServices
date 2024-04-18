import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteevaluationComponent } from './delete-evaluation.component';

describe('DeleteevaluationComponent', () => {
  let component: DeleteevaluationComponent;
  let fixture: ComponentFixture<DeleteevaluationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteevaluationComponent]
    });
    fixture = TestBed.createComponent(DeleteevaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
