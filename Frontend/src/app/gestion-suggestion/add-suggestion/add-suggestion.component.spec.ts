import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsuggestionComponent } from './add-suggestion.component';

describe('AddsuggestionComponent', () => {
  let component: AddsuggestionComponent;
  let fixture: ComponentFixture<AddsuggestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddsuggestionComponent]
    });
    fixture = TestBed.createComponent(AddsuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
