import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEmployeComponent } from './show-employe.component';

describe('ShowEmployeComponent', () => {
  let component: ShowEmployeComponent;
  let fixture: ComponentFixture<ShowEmployeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowEmployeComponent]
    });
    fixture = TestBed.createComponent(ShowEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
