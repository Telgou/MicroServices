import { ComponentFixture, TestBed } from '@angular/core/testing';

import { dashevaluationComponent } from './dashevaluation.component';

describe('dashevaluationComponent', () => {
  let component: dashevaluationComponent;
  let fixture: ComponentFixture<dashevaluationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [dashevaluationComponent]
    });
    fixture = TestBed.createComponent(dashevaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
