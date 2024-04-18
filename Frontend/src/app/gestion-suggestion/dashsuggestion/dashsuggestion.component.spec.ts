import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashsuggestionComponent } from './dashsuggestion.component';

describe('DashsuggestionComponent', () => {
  let component: DashsuggestionComponent;
  let fixture: ComponentFixture<DashsuggestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashsuggestionComponent]
    });
    fixture = TestBed.createComponent(DashsuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
