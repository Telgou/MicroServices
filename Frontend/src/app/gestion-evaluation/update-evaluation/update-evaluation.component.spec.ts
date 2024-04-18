import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateevaluationComponent } from './update-evaluation.component';

describe('UpdateevaluationComponent', () => {
  let component: UpdateevaluationComponent;
  let fixture: ComponentFixture<UpdateevaluationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateevaluationComponent]
    });
    fixture = TestBed.createComponent(UpdateevaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
