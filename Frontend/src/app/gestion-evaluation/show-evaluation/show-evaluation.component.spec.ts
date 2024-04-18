import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowevaluationComponent } from './show-evaluation.component';

describe('ShowevaluationComponent', () => {
  let component: ShowevaluationComponent;
  let fixture: ComponentFixture<ShowevaluationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowevaluationComponent]
    });
    fixture = TestBed.createComponent(ShowevaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
