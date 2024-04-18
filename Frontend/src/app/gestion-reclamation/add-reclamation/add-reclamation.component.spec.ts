import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddreclamationComponent } from './add-reclamation.component';

describe('AddreclamationComponent', () => {
  let component: AddreclamationComponent;
  let fixture: ComponentFixture<AddreclamationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddreclamationComponent]
    });
    fixture = TestBed.createComponent(AddreclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
