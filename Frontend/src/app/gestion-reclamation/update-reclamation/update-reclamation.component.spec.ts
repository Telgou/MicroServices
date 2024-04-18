import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatereclamationComponent } from './update-reclamation.component';

describe('UpdatereclamationComponent', () => {
  let component: UpdatereclamationComponent;
  let fixture: ComponentFixture<UpdatereclamationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatereclamationComponent]
    });
    fixture = TestBed.createComponent(UpdatereclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
