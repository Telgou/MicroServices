import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowreclamationComponent } from './show-reclamation.component';

describe('ShowreclamationComponent', () => {
  let component: ShowreclamationComponent;
  let fixture: ComponentFixture<ShowreclamationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowreclamationComponent]
    });
    fixture = TestBed.createComponent(ShowreclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
