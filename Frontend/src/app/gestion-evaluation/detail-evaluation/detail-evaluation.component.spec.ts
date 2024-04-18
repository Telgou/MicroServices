import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailevaluationComponent } from './detail-evaluation.component';

describe('DetailevaluationComponent', () => {
  let component: DetailevaluationComponent;
  let fixture: ComponentFixture<DetailevaluationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailevaluationComponent]
    });
    fixture = TestBed.createComponent(DetailevaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
