import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletesuggestionComponent } from './delete-suggestion.component';

describe('DeletesuggestionComponent', () => {
  let component: DeletesuggestionComponent;
  let fixture: ComponentFixture<DeletesuggestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletesuggestionComponent]
    });
    fixture = TestBed.createComponent(DeletesuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
