import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddevaluationComponent } from './add-evaluation.component';

describe('AddevaluationComponent', () => {
  let component: AddevaluationComponent;
  let fixture: ComponentFixture<AddevaluationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddevaluationComponent]
    });
    fixture = TestBed.createComponent(AddevaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
