import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCongeComponent } from './show-conge.component';

describe('ShowCongeComponent', () => {
  let component: ShowCongeComponent;
  let fixture: ComponentFixture<ShowCongeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowCongeComponent]
    });
    fixture = TestBed.createComponent(ShowCongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
