import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashreclamationComponent } from './dashreclamation.component';

describe('DashreclamationComponent', () => {
  let component: DashreclamationComponent;
  let fixture: ComponentFixture<DashreclamationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashreclamationComponent]
    });
    fixture = TestBed.createComponent(DashreclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
