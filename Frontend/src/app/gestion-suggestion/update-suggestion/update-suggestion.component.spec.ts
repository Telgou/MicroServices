import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesuggestionComponent } from './update-suggestion.component';

describe('UpdatesuggestionComponent', () => {
  let component: UpdatesuggestionComponent;
  let fixture: ComponentFixture<UpdatesuggestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatesuggestionComponent]
    });
    fixture = TestBed.createComponent(UpdatesuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
